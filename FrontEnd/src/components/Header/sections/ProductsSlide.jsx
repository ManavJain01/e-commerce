import rightArrowLogo from '../Images/rightArrow.png'

import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

function ProductSlide({ list, categoryName }){
  return(
    <>  
      <div className="hidden absolute whitespace-nowrap text-sm bg-white py-2 rounded-md shadow-md /flex">
        <ItemsStyle className="flex flex-1 flex-col gap-2">
          {list.map((e, i) => {
            return(
              <div id="secondName-wrapper" key={i} className="flex justify-between gap-2 px-5 py-1 text-xs lg:text-sm">
                <NavLink to={`Categories/${e.item || e}`} state={{value: [e.item || e, categoryName]}} className="aria-[current=page]:text-red-600">{e.item || e}</NavLink>
                {e.subitems
                  ?<div className="flex relative">
                    <img src={rightArrowLogo} className="object-contain w-3" /> 
                    <div className="hidden bg-white px-3 py-2 absolute -top-1 left-7 /flex flex-col gap-2 rounded-md shadow-md">
                      {e.subitems.map((f, i)=>{
                        return(
                          <div key={i} className="hover:bg-black"><NavLink to={`Categories/${f}`} state={{value: [f, categoryName]}} className="aria-[current=page]:text-red-600">{f}</NavLink></div>
                        )
                      })}
                    </div>
                  </div>

                  : ""
                }
              </div>
            )
          })}
        </ItemsStyle>
      </div>
    </>
  )
}

export default ProductSlide;

const ItemsStyle = styled.div`
  div:hover{
    background-color:lightblue;
  }

  div:hover div div{
    background-color:lightblue;
  }
`