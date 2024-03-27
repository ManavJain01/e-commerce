import rightArrowLogo from '../../Images/rightArrow.png'

import { styled } from 'styled-components'

function ProductSlide({ list }){
  return(
    <>
      
        <div className="hidden absolute whitespace-nowrap text-sm bg-white w-[calc(250%)] py-2 rounded-md shadow-md flex">
          <ItemsStyle className="flex flex-1 flex-col gap-2">
            {list.map((e)=>(
              <div key={e} className="flex justify-between pl-5 py-1">{e.name? e.name : e} {e.name? <img src={rightArrowLogo} className="object-contain w-3 mr-5" /> : ""}</div>
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
    color:white;
  }
`