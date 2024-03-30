import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";

import { medicines } from '../../Medicines/components/MedicinesAPI'

import Filters from './Filters'

function Categories(){
  const propsValue = useLocation().state.value;
  
  // console.log(propsValue)
  // console.log(Array.isArray(propsValue))
  
  const [isCategory, setIsCategory] = useState('');
  const [categories, setCategories] = useState(medicines.filter(e => e.type != 'Medicines'))
  
  useEffect(()=>{
    if(Array.isArray(propsValue)){
      setIsCategory(true)
      setCategories(categories.filter(e => e.type == propsValue[1]))
    }
    else{
      setIsCategory(false)
      setCategories(categories.filter(e => e.type == propsValue))
    }
  },[isCategory])
  
  // console.log(categories)
  return(
    <>
      <Filters e={categories} />
    </>
  )
}

export default Categories;