import rightArrowLogo from '../../Images/rightArrow.png'

import { styled } from 'styled-components'

function ProductSlide({ list }){
  return(
    <>  
      <div className="hidden absolute whitespace-nowrap text-sm bg-white w-[calc(250%)] py-2 rounded-md shadow-md /flex">
        <ItemsStyle className="flex flex-1 flex-col gap-2">
          {list.map((e)=>(
            <div id="secondName-wrapper" key={e.name} className="flex justify-between pl-5 py-1">
              {e.name}
              {e.subList?
              <div className="flex relative">
                <img src={rightArrowLogo} className="object-contain w-3 mr-5" /> 
                <div className="hidden bg-white px-3 py-2 absolute -top-1 left-7 /flex flex-col gap-2 rounded-md shadow-md">
                  {e.subList.map((f)=>(
                    <div key={f.subItems} className="hover:bg-black">{f.subItems}</div>
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
    color:white;
  }

  div:hover div div{
    background-color:lightblue;
  }
`