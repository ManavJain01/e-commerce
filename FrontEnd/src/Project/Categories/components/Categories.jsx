// Importing React Icons
import { RiExpandUpDownFill } from "react-icons/ri";

// Importing React Packages
import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect, useMemo } from "react";

// Importing Axios Packages
import axios from 'axios'

// Imaporting Local Files
import { medicines } from '../../Medicines/components/MedicinesAPI'
import ProductCard from '../../Product Card/components/ProductCard'

import Filters from './Filters'
import FilteredComponent from './FilteredComponent';

function Categories(){
  let propsValue;
  if(useLocation().state) propsValue = useLocation().state.value;
  else propsValue = useParams()

  const [api, setApi] = useState()
  const [categories, setCategories] = useState()
  const [categories1, setCategories1] = useState(medicines.filter(e => e.type != 'Medicines'))
  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    // Getting Data From BackEnd
    const getData = async () => {
      const response = await axios.get('http://localhost:5000/Categories')
      setApi(response.data)
    }

    getData();

  }, [])
  console.log(categories1);

  useEffect(()=>{
    // Accessing FrontEnd Object File
    setCategories1(medicines.filter(e => e.type == propsValue[2]))  
    setFiltered(false);
    
    // Setting Backend Data
    if(propsValue[2] === "Personal care"){
      api && setCategories(api[0])
    }else if(propsValue[2] === "Health Conditions"){
      api && setCategories(api[1])
    }else if(propsValue[2] === "Vitamins & Supplements"){
      api && setCategories(api[2])
    }else if(propsValue[2] === "Diabetes Care"){
      api && setCategories(api[3])
    }else if(propsValue[2] === "Healthcare Devices"){
      api && setCategories(api[4])
    }else{
      setCategories(0)
    }
    
  },[propsValue])
  
  return(
    <div className="flex gap-10 py-20 px-8">
      <Filters e={categories1} setFiltered={setFiltered} />

      <div>
        <h1 className="text-2xl font-semibold flex justify-between">
          {!filtered ? propsValue[0] : filtered[0]}
          <span className='flex items-center sm:hidden text-green-700 cursor-pointer'>
            <RiExpandUpDownFill />
            Filter
          </span>
        </h1>

        <div className="flex flex-wrap gap-5 py-10 my-4 border-t border-gray-400">
          {
            //  Search Through Navbar
            !filtered ? 
            // FrontEnd Objects
            (categories == 0 || categories == null) ?
            categories1[0].list && categories1[0].list.map((f)=>
              //  Navbar Headlines's List have subLists 1st Condition
              f.subList ? (propsValue[0] == propsValue[2] || propsValue[1] == f.name || propsValue[0] == f.name) && f.subList.map((g)=>
                g.Items && (propsValue[0] == propsValue[2] || propsValue[0] == propsValue[1] || propsValue[0] == g.subItems) && g.Items.map((h)=>
                  <div key={h.item} className="flex gap-2">
                    <ProductCard e={h} title={'Categories'} />
                  </div>
                )
              //  Now Navbar Headlines's List who don't have subLists 2nd Condition
              ) : (propsValue[0] == propsValue[2]) && f.Items && f.Items.map((g) =>
                  <div key={g.item} className="flex gap-2">
                    <ProductCard e={g} title={'Categories'} />
                            {/* 3rd Condition */}
                  </div>) || (propsValue[0] == propsValue[1] && propsValue[0] == f.name) && f.Items && f.Items.map((g) =>
                    <ProductCard key={g.item} e={g} title={'Categories'} />))

            // BackEnd API
            :categories && categories.map(e => {
              // console.log(e);
              return e.subitems && e.subitems.map(f => {
                return Object.keys(f).length > 6 ? <ProductCard key={f.item} e={f} title={'Categories'} />
                : f.subitems && f.subitems.map(g => 
                  <ProductCard key={g.item} e={g} title={'Categories'} />
                )
              })
            })

            //  Search Through Filters
            :<FilteredComponent filtered={filtered} e={categories1} />
          }
        </div>
      </div>
    </div>
  )
}

export default Categories;