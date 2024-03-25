function InputBtn(e){
  if(e.title == "header-input"){
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

  if(e.title == "footer-subscribe"){
    return(
      <>
        <div className="relative w-[23rem]">
          <input type="text" placeholder={e.placeholder} className="h-12 w-[23rem] px-5 py-3 rounded-md" />
          <button className="bg-blue-600 text-white text-lg font-semibold h-12 px-8 rounded-e-lg absolute inset-y-0 right-0">{e.button}</button>
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