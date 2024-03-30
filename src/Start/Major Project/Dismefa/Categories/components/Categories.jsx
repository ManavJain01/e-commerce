import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";

import { medicines } from '../../Medicines/components/MedicinesAPI'
import ProductCard from '../../Product Card/components/ProductCard'

import Filters from './Filters'

function Categories(){
  const propsValue = useLocation().state.value;
  
  const [categories, setCategories] = useState(medicines.filter(e => e.type != 'Medicines'))

  useEffect(()=>{
    setCategories(medicines.filter(e => e.type == propsValue[1]))  
  },[propsValue])

  return(
    <div className="flex gap-10 py-2 px-8">
      <Filters e={categories} />

      <div>
        <h1 className="text-2xl font-semibold">{propsValue[0]}</h1>

        <div className="py-10 my-4 border-t border-gray-400">
          {categories[0].list.map((f)=>
            f.subList && f.subList.map((g)=>
              g.Items && g.Items.map((h)=>
                <div key={h.name} className="flex gap-2">
                  <ProductCard e={h} />
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Categories;