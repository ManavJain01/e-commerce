// Import React Icons
import { IoIosArrowDown } from "react-icons/io";

// Import React Packages
import { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";

// Import Local Components
import SearchFiltered from '../Search/SearchFiltered'
import AddressBtn from "./AddressBtn";

// Importing Hooks
import { useServices } from '../../hooks/useServices'

function InputBtn(e){
  // Custom Hooks
  const { getSearchResult } = useServices();

  // useNavigate
  const navigate = useNavigate();

  // useRef
  const inputRef = useRef(null);

  // UseStates
  const [filtered, setFiltered] = useState(null)
  const [ enableAddressBox, setEnableAddressBox ] = useState(false)
  const [ checkAddress, setCheckAddress ] = useState("Deliver to")

  // Functions
  async function searchInputOnChange(e){
    let target = e.target.value;
    if(target == ""){
      setFiltered("")
    }else{
      // await getSearchResult(target);
    }
  }

  async function searchInputOnClick(e){
    e.preventDefault();
    const query = inputRef.current.value;

    const data = await getSearchResult(query);

    navigate('/search', { state: { query, data } });
  }

  if(e.title == "header-input" && e.id == "enable"){
    return(
      <div>
        <form onSubmit={(e)=>searchInputOnClick(e)} id={e.id} className="flex relative">
          <button
            onClick={()=>setEnableAddressBox(!enableAddressBox)}
            className="bg-blue-100 text-black flex items-center justify-between h-10 mt-1 px-2 pl-5 w-48 rounded-lg absolute left-11">
            {checkAddress}
            <IoIosArrowDown />
          </button>
          {enableAddressBox && <AddressBtn setCheckAddress={setCheckAddress} setEnableAddressBox={setEnableAddressBox} />}
          <input type="text" placeholder={e.placeholder} onChange={(e)=>searchInputOnChange(e)} ref={inputRef} className="h-12 w-full pl-52 px-2 mx-10 border-2 border-blue-300 rounded-md outline-none" />
          <button onClick={(e)=>searchInputOnClick(e)} className="bg-blue-600 text-white font-semibold h-12 px-8 rounded-e-lg absolute right-9">{e.button}</button>
        </form>

        <SearchFiltered filtered={filtered} setFiltered={setFiltered} />
      </div>
    )
  }
  if(e.title == "header-input"){
    return(
      <div id={e.title} className="hidden /flex flex-1 relative">
        <form onSubmit={(e)=>searchInputOnClick(e)} className="flex-1 flex relative">
          <button
            onClick={()=>setEnableAddressBox(!enableAddressBox)}
            className="bg-blue-100 text-black flex items-center justify-between h-10 mt-1 px-2 pl-5 w-48 rounded-lg absolute left-11">
            {checkAddress}
            <IoIosArrowDown />
          </button>
          {enableAddressBox && <AddressBtn setCheckAddress={setCheckAddress} setEnableAddressBox={setEnableAddressBox} />}
          <input type="text" placeholder={e.placeholder} onChange={(e)=>searchInputOnChange(e)} ref={inputRef} className="h-12 w-full pl-52 px-2 mx-10 border-2 border-blue-300 rounded-md outline-none" />
          <button className="bg-blue-600 text-white font-semibold h-12 px-8 rounded-e-lg absolute right-9">{e.button}</button>
        </form>

        <div className="z-50 absolute top-12 left-1 w-full">
          <SearchFiltered filtered={filtered} setFiltered={setFiltered} />
        </div>
      </div>
    )
  }

  if(e.title == "footer-subscribe"){
    return(
      <>
        <div className="relative max-w-[23rem]">
          <input type="text" placeholder={e.placeholder} className="h-12 max-w-[23rem] lg:w-[23rem] px-5 py-3 rounded-md outline-none" />
          <button className="bg-blue-600 text-white text-lg font-semibold h-12 px-8 rounded-e-lg absolute inset-y-0 right-1 lg:right-0">{e.button}</button>
      </div>
      </>
    )
  }

  return(
    <>
      <div className="relative">
          <input
            id={e.id}
            type="text"
            placeholder={e.placeholder}
            className="h-12 px-2 border-2 border-blue-300 rounded-md outline-none" />
          <button
          onClick={()=>{e.onClick()}}
          className="bg-blue-600 text-white font-semibold h-12 px-8 rounded-e-lg absolute inset-y-0 right-0">{e.button}</button>
      </div>
    </>
  )
}

export default InputBtn;