import { styled } from "styled-components";
import { Link } from 'react-router-dom'

import { items } from './ProductsHeadlines'
import ProductSlide from './ProductsSlide'

function ProductsNavbar(){

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

  return(
    <>
      <div className="relative">
        <ItemStyles>
          <div className="w-[100vw] relative z-40 py-1 mb-10 flex justify-around bg-white text-gray-500 text-xs lg:text-sm whitespace-nowrap border shadow-md shadow-gray-700">
            {items.map((e)=>(
              <div key={e.id} className="flex flex-col gap-3">
                <ul className="relative">
                  {e.path ? <Link to={e.path} id={e.id}>{e.name}</Link> : <li id={e.id}><Link to={`Categories/${e.name}`} state={{value: [e.name,e.name,e.name]}}>{e.name}</Link></li>}
                  {e.list ? <ProductSlide list={e.list} categoryName={e.name} /> : ""}
                  {/* {e.list ? e.list.map((f)=>(<div key={f} className="/absolute /top-10 /left-0 px-2 my-2 hidden">{f}</div>)) : ""} */}
                </ul>
              </div>
            ))}
          </div>
        </ItemStyles>
      </div>
    </>
  )
}

export default ProductsNavbar;