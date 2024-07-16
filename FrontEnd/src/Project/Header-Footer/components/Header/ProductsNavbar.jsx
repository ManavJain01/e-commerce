// Importing React configs
import { styled } from "styled-components";
import { NavLink } from 'react-router-dom'

// Importing React Packages
import { useEffect, useState } from "react";

// Importing Axios Packages
import axios from 'axios'

// Importing Local Components
import ProductSlide from './ProductsSlide'

function ProductsNavbar(){
  // useState
  const [navOptions, setNavOptions] = useState("")

  // useEffect
  useEffect(()=>{
    
    // Getting Data From BackEnd
    const getData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/NavOptions`)
      setNavOptions(response.data)
    }
    getData();
  }, [])

  return(
    <>
      <div className="absolute -right-10 top-12">
        <ItemStyles>
          <div className="w-[100vw] z-40 py-1 flex justify-around bg-white text-gray-500 text-xs lg:text-sm whitespace-nowrap border shadow-md shadow-gray-700">
            {navOptions && Object.keys(navOptions).length != 0 && navOptions?.map((e,i) => {
              return(
                <div key={i} className="flex flex-col gap-3">
                  <ul>
                    {e.path 
                      ?<NavLink to={e?.path} id={e._id} className="aria-[current=page]:text-red-400">{e?.item}</NavLink>
                      :<li id={e._id}><NavLink
                        to={`Categories/${e?.item}`}
                        state={{value: e?.item}}
                        className="aria-[current=page]:text-red-600"
                      >{e?.item}</NavLink></li>
                    }

                    {e.subitems
                      ?<ProductSlide list={e.subitems} categoryName={e.item} />
                      :""
                    }
                  </ul>
                </div>
              )
            })}
          </div>
        </ItemStyles>
      </div>
    </>
  )
}

export default ProductsNavbar;

const ItemStyles = styled.div`
li:hover, a:hover {
  color: red;
  cursor: pointer;
}

li:hover ~ div, ul div:hover{
  display: flex;
  cursor: pointer;
}

#secondName-wrapper:hover div div{
  display: flex;
}

#secondName-wrapper:hover div div div:active{
  color: green;
}


`