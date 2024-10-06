// Importing React-Icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";

// Importing React Packages
import { useState, useEffect } from "react"

// Importing React configs
import { styled } from "styled-components";
import { NavLink } from 'react-router-dom'

// Importing Hooks
import { useServices } from '../../../hooks/useServices'

export default function CategoriesNavbar() {
  // Custom Hooks
  const { getNavOptions, loading } = useServices();

  // UseStates
  const [navOptions, setNavOptions] = useState([]);

  // UseEffect
  useEffect(() => {
    const runOnLoad = async () => {
      // Custom Hooks Functions Call
      setNavOptions(await getNavOptions());
    }
    
    runOnLoad();
  }, [])

  return (
    <div className="absolute bottom-0 left-0 w-full">
      {loading
        ?<div className="bg-blue-100 h-7 w-full py-1 animate-pulse">
          <AiOutlineLoading3Quarters className="text-sky-200 mx-auto size-5 animate-spin" />
        </div>
        // Navbar
        :<nav className="text-xs lg:text-sm text-gray-500 whitespace-nowrap flex justify-around items-center h-7 border-y">
          {Array.isArray(navOptions) && Object.keys(navOptions).length != 0 && navOptions?.map((e,i) => {
            return(
              <div key={i} className="flex flex-col gap-3">
                <ul className="group">{e.path 
                  ?<NavLink to={e?.path} id={e._id} className="aria-[current=page]:text-red-400 hover:text-red-500">{e?.item}</NavLink>
                  :<li id={e._id}><NavLink
                    to={`Categories/${e?.item}`}
                    state={{value: e?.item}}
                    className="aria-[current=page]:text-red-600 hover:text-red-500"
                  >{e?.item}</NavLink></li>
                }

                {e?.subitems
                  &&<div className="absolute bg-white py-2 rounded-md shadow-md">
                    {e.subitems.map((f, i) => {
                      return(
                        <NavbarStyle key={i} className={`hidden hover:bg-blue-100 group-hover:flex /flex justify-between gap-2 pl-5 ${!f.subitems && "pr-5"} py-1 text-xs lg:text-sm`}>
                          <NavLink to={`Categories/${f.item || f}`} state={{value: [f.item || f, e.item]}} className="aria-[current=page]:text-red-600 hover:text-red-500">{f.item || f}</NavLink>
                          {f.subitems
                            &&<div className="flex items-center relative pr-5">
                              <IoMdArrowDropright />
                              <div className="thirdColumn hidden bg-white absolute -top-1 left-7 /flex flex-col gap-2 rounded-md shadow-md">
                                {f.subitems.map((g, i)=>{
                                  return(
                                    <div key={i} className="hover:bg-blue-100 px-3 py-1"><NavLink to={`Categories/${g}`} state={{value: [g, e.item]}} className="aria-[current=page]:text-red-600">{g}</NavLink></div>
                                  )
                                })}
                              </div>
                            </div>
                          }
                        </NavbarStyle>
                      )
                    })}
                  </div>
                }</ul>
              </div>
            )
          })}
        </nav>
      }
    </div>
  )
}

const NavbarStyle = styled.div`
  cursor: pointer;
  :hover .thirdColumn{
    display: flex;
  }
`