import { IoIosArrowDown } from "react-icons/io";

import { medicines } from '../../Medicines/components/MedicinesAPI'
import SearchFiltered from './SearchFiltered'
import AddressBtn from "./AddressBtn";

import { Link } from 'react-router-dom'
import { useState ,useMemo, useEffect } from 'react'

function InputBtn(e){
  const [filtered, setFiltered] = useState(null)
  const [ enableAddressBox, setEnableAddressBox ] = useState(false)
  const [ checkAddress, setCheckAddress ] = useState("474011, Gwalior")

  function searchInputOnChange(e){
    if(e.target.value == "")  setFiltered("")
    else  setFiltered(medicines.filter(
      item => 
        item.type.toLowerCase().includes((e.target.value).toLowerCase())
        // || item.list && item.list.filter((x => {
        //   console.log(x)
        //   return x.name.includes(e.target.value)
        // }))
    ))
  }

  function searchInputOnClick(e){
    e.preventDefault()
    setFiltered("")
  }

    if(e.title == "header-input" && e.id == "enable"){
    return(
      <div>
        <form id={e.id} onSubmit={(e)=>searchInputOnClick(e)} className="flex relative">
          <button
            onClick={()=>setEnableAddressBox(!enableAddressBox)}
            className="bg-blue-100 text-black flex items-center justify-between h-10 mt-1 px-2 pl-5 w-48 rounded-lg absolute left-11">
            {checkAddress}
            <IoIosArrowDown />
          </button>
          {enableAddressBox && <AddressBtn setCheckAddress={setCheckAddress} setEnableAddressBox={setEnableAddressBox} />}
          <input type="text" placeholder={e.placeholder} onChange={(e)=>searchInputOnChange(e)} className="h-12 w-full pl-52 px-2 mx-10 border-2 border-blue-300 rounded-md" />
          <button className="bg-blue-600 text-white font-semibold h-12 px-8 rounded-e-lg absolute right-9">{e.button}</button>
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
          <input type="text" placeholder={e.placeholder} onChange={(e)=>searchInputOnChange(e)} className="h-12 w-full pl-52 px-2 mx-10 border-2 border-blue-300 rounded-md" />
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
          <input type="text" placeholder={e.placeholder} className="h-12 max-w-[23rem] lg:w-[23rem] px-5 py-3 rounded-md" />
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
            className="h-12 px-2 border-2 border-blue-300 rounded-md" />
          <button
          onClick={()=>{e.onClick()}}
          className="bg-blue-600 text-white font-semibold h-12 px-8 rounded-e-lg absolute inset-y-0 right-0">{e.button}</button>
      </div>
    </>
  )
}

export default InputBtn;