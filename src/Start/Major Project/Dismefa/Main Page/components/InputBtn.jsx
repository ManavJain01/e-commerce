import { medicines } from '../../Medicines/components/MedicinesAPI'


function InputBtn(e){

  // console.log(medicines[1].list)

  function searchInputOnChange(e){
    if(e.target.value){}
    // const filtered = medicines.filter(item => item.type.toLowerCase() == (e.target.value).toLowerCase())
    // const filtered = medicines.filter(item1 => item1.list.filter(item2 => item2.name.toLowerCase() == (e.target.value).toLowerCase()))
    // console.log(filtered)
  }

  function searchInputOnClick(){

  }

  if(e.title == "header-input" && e.id == "enable"){
    return(
      <>
        <div id={e.id} className="flex-1 flex relative">
          <button className="bg-blue-100 text-black h-10 mt-1 px-8 rounded-lg absolute left-11">Deliver to Address</button>
          <input type="text" placeholder={e.placeholder} className="h-12 w-full pl-52 px-2 mx-10 border-2 border-blue-300 rounded-md" />
          <button className="bg-blue-600 text-white font-semibold h-12 px-8 rounded-e-lg absolute right-9">{e.button}</button>
        </div>
      </>
    )
  }
  if(e.title == "header-input"){
    return(
      <>
        <form id={e.id} onSubmit={()=>searchInputOnClick()} className="hidden flex-1 /flex relative">
          <button className="bg-blue-100 text-black h-10 mt-1 px-8 rounded-lg absolute left-11">Deliver to Address</button>
          <input type="text" placeholder={e.placeholder} onChange={(e)=>searchInputOnChange(e)} className="h-12 w-full pl-52 px-2 mx-10 border-2 border-blue-300 rounded-md" />
          <button className="bg-blue-600 text-white font-semibold h-12 px-8 rounded-e-lg absolute right-9">{e.button}</button>
        </form>
      </>
    )
  }

  if(e.title == "footer-subscribe"){
    return(
      <>
        <div className="relative max-w-[23rem]">
          <input type="text" placeholder={e.placeholder} className="h-12 max-w-[23rem] lg:w-[23rem] px-5 py-3 rounded-md" />
          <button className="bg-blue-600 text-white text-lg font-semibold h-12 px-8 rounded-e-lg absolute inset-y-0 right-1 lg:right-0">{e.button}</button>
      </div>
      </>
    )
  }

  return(
    <>
      <div className="relative">
          <input type="text" placeholder={e.placeholder} className="h-12 px-2 mx-10 border-2 border-blue-300 rounded-md" />
          <button className="bg-blue-600 text-white font-semibold h-12 px-8 rounded-e-lg absolute inset-y-0 right-0">{e.button}</button>
      </div>
    </>
  )
}

export default InputBtn;