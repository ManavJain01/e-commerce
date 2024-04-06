import rightArrowLogo from '../../Images/rightArrow.png'

import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

{/* {e.list ? <Link to={`/Categories/${e.name}`} state={{value: "hi"}}  ><ProductSlide list={e.list} /></Link> : ""} */}

function ProductSlide({ list, categoryName }){
  return(
    <>  
      <div className="hidden absolute whitespace-nowrap text-sm bg-white py-2 rounded-md shadow-md /flex">
        <ItemsStyle className="flex flex-1 flex-col gap-2">
          {list.map((e)=>(
            <div id="secondName-wrapper" key={e.name} className="flex justify-between gap-2 px-5 py-1 text-xs lg:text-sm">
              <Link to={`Categories/${e.name}`} state={{value: [e.name, e.name, categoryName]}}>{e.name}</Link>
              {e.subList?
              <div className="flex relative">
                <img src={rightArrowLogo} className="object-contain w-3" /> 
                <div className="hidden bg-white px-3 py-2 absolute -top-1 left-7 /flex flex-col gap-2 rounded-md shadow-md">
                  {e.subList.map((f)=>(
                    <div key={f.subItems} className="hover:bg-black"><Link to={`Categories/${f.subItems}`} state={{value: [f.subItems, e.name, categoryName]}}>{f.subItems}</Link></div>
                  ))}
                </div>
              </div> 
              : ""}
            </div>
          ))}
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