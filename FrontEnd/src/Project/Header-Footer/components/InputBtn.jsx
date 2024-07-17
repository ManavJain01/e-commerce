import { IoIosArrowDown } from "react-icons/io";

import { medicines } from '../../Medicines/components/MedicinesAPI'
import SearchFiltered from './SearchFiltered'
import AddressBtn from "./AddressBtn";

import { Link } from 'react-router-dom'
import { useState } from 'react'

function InputBtn(e){
  const [filtered, setFiltered] = useState(null)
  const [filtered2, setFiltered2] = useState(null)
  const [filtered3, setFiltered3] = useState(null)
  const [filtered4, setFiltered4] = useState(null)
  const [filtered5, setFiltered5] = useState(null)
  const [ enableAddressBox, setEnableAddressBox ] = useState(false)
  const [ checkAddress, setCheckAddress ] = useState("Gwalior, 474011")
  
  function searchInputOnChange(e){
    let tempForFiltered2 = []
    let tempForFiltered3 = []
    let tempForFiltered4 = []
    let tempForFiltered5 = []
    let target = e.target.value;
    if(target == ""){
      setFiltered("")
      setFiltered2("")
      setFiltered3("")
      setFiltered4("")
      setFiltered5("")
    }else{
      // Set Filtered
      setFiltered(medicines.filter(item => item.type.toLowerCase().includes((e.target.value).toLowerCase())))
      
      medicines.map(item =>{
        item.list && item.list.filter((x => {
          // Set Filtered2
          if(x.name.toLowerCase().includes(target.toLowerCase())) return tempForFiltered2.push(x);

          // Set Filtered 3
          x.Items && x.Items.map((y) => {
            if(y.name.toLowerCase().includes(target.toLowerCase())) return tempForFiltered3.push(y);
          })

          x.subList && x.subList.map((y) => {
            if(y.subItems.toLowerCase().includes(target.toLowerCase())) return tempForFiltered4.push(y);

            y.Items && y.Items.map((z) => {
            if(z.name.toLowerCase().includes(target.toLowerCase())) return tempForFiltered5.push(z);
            })
          })
        }))
      })
      setFiltered2(tempForFiltered2)
      setFiltered3(tempForFiltered3)
      setFiltered4(tempForFiltered4)
      setFiltered5(tempForFiltered5)
    }
  }

  function searchInputOnClick(e){
    e.preventDefault()
    setFiltered("")
    setFiltered2("")
    setFiltered3("")
    setFiltered4("")
    setFiltered5("")
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
          <input type="text" placeholder={e.placeholder} onChange={(e)=>searchInputOnChange(e)} className="h-12 w-full pl-52 px-2 mx-10 border-2 border-blue-300 rounded-md outline-none" />
          <button className="bg-blue-600 text-white font-semibold h-12 px-8 rounded-e-lg absolute right-9">{e.button}</button>
        </form>

        <SearchFiltered filtered={filtered} setFiltered={setFiltered} filtered2={filtered2} setFiltered2={setFiltered2} filtered3={filtered3} setFiltered3={setFiltered3} filtered4={filtered4} setFiltered4={setFiltered4} filtered5={filtered5} setFiltered5={setFiltered5} />
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
          <input type="text" placeholder={e.placeholder} onChange={(e)=>searchInputOnChange(e)} className="h-12 w-full pl-52 px-2 mx-10 border-2 border-blue-300 rounded-md outline-none" />
          <button className="bg-blue-600 text-white font-semibold h-12 px-8 rounded-e-lg absolute right-9">{e.button}</button>
        </form>

        <div className="z-50 absolute top-12 left-1 w-full">
          <SearchFiltered filtered={filtered} setFiltered={setFiltered} filtered2={filtered2} setFiltered2={setFiltered2} filtered3={filtered3} setFiltered3={setFiltered3} filtered4={filtered4} setFiltered4={setFiltered4} filtered5={filtered5} setFiltered5={setFiltered5} />
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