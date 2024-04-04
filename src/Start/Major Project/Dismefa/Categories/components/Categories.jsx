import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect, useMemo } from "react";

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
    setFiltered(false);
  },[propsValue])


  return(
    <div className="flex gap-10 py-20 px-8">
      <Filters e={categories} setFiltered={setFiltered} />

      <div>
        <h1 className="text-2xl font-semibold">{!filtered ? propsValue[0] : filtered[0]}</h1>

        <div className="flex flex-wrap gap-5 py-10 my-4 border-t border-gray-400">
          {
            //  Search Through Navbar
            !filtered ? 
            categories[0].list.map((f)=>
              //  Navbar Headlines's List have subLists 1st Condition
              f.subList ? (propsValue[0] == propsValue[2] || propsValue[1] == f.name || propsValue[0] == f.name) && f.subList.map((g)=>
                g.Items && (propsValue[0] == propsValue[2] || propsValue[0] == propsValue[1] || propsValue[0] == g.subItems) && g.Items.map((h)=>
                  <div key={h.name} className="flex gap-2">
                    <ProductCard e={h} title={'Categories'} />
                  </div>
                )
              //  Now Navbar Headlines's List who don't have subLists 2nd Condition
              ) : (propsValue[0] == propsValue[2]) && f.Items && f.Items.map((g) =>
                  <div key={g.name} className="flex gap-2">
                    <ProductCard e={g} title={'Categories'} />
                            {/* 3rd Condition */}
                  </div>) || (propsValue[0] == propsValue[1] && propsValue[0] == f.name) && f.Items && f.Items.map((g) =>
                    <ProductCard key={g.name} e={g} title={'Categories'} />)
            //  Search Through Filters
            ):<FilteredComponent filtered={filtered} e={categories} />
          }
        </div>
      </div>
    </div>
  )
}

export default Categories;