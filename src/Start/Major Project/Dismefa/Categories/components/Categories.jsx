import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";

import { medicines } from '../../Medicines/components/MedicinesAPI'
import ProductCard from '../../Product Card/components/ProductCard'

import Filters from './Filters'
import FilteredComponent from './FilteredComponent';

function Categories(){
  const propsValue = useLocation().state.value;
  
  const [categories, setCategories] = useState(medicines.filter(e => e.type != 'Medicines'))
  const [filtered, setFiltered] = useState(false)

  useEffect(()=>{
    setCategories(medicines.filter(e => e.type == propsValue[2]))  
  },[propsValue])

  useEffect(()=>{
    console.log("working")

    setFiltered(false)
  },[])

  return(
    <div className="flex gap-10 py-2 px-8">
      <Filters e={categories} setFiltered={setFiltered} />

      <div>
        <h1 className="text-2xl font-semibold">{propsValue[0]}</h1>

        <div className="flex gap-5 py-10 my-4 border-t border-gray-400">
          {!filtered ? categories[0].list.map((f)=>
            f.subList && (propsValue[0] == propsValue[2] || propsValue[1] == f.name || propsValue[0] == f.name) && f.subList.map((g)=>
              g.Items && (propsValue[0] == propsValue[2] || propsValue[0] == propsValue[1] || propsValue[0] == g.subItems) && g.Items.map((h)=>
                <div key={h.name} className="flex gap-2">
                  <ProductCard e={h} />
                </div>
              )
            )
          ) : <FilteredComponent filtered={filtered} e={categories} />}
        </div>
      </div>
    </div>
  )
}

export default Categories;