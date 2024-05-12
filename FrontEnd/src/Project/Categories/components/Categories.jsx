// Importing React Icons
import { RiExpandUpDownFill } from "react-icons/ri";
import { CgUnavailable } from "react-icons/cg";

// Importing React Packages
import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect, useMemo } from "react";

// Importing Axios Packages
import axios from 'axios'

// Imaporting Local Files
import ProductCard from '../../Product Card/components/ProductCard'

import Filters from './Filters'
import FilteredComponent from './FilteredComponent';

function Categories(){
  let propsValue;
  if(useLocation().state) propsValue = useLocation().state.value;
  else propsValue = useParams()

  const [filtered, setFiltered] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(Array.isArray(propsValue) ? propsValue[0] : propsValue)
  const [categories, setCategories] = useState(0)
  const [allCategories, setAllCategories] = useState(0)

  // allCategories.then(res => {console.log(res);})
  
  useEffect(()=>{
    setFiltered(false);
    
    // Getting Data From BackEnd
    const getData = async () => {
      const response1 = await axios.post('http://localhost:5000/Categories/' + propsValue[0], { data : propsValue })
      const response2 = await axios.get('http://localhost:5000/Categories/')
      
      setCategories(response1.data)
      setAllCategories(response2.data)
    }
    getData();

    setCurrentCategory(Array.isArray(propsValue) ? propsValue[0] : propsValue)
    
    // console.log(categories);

  },[propsValue])
  
  return(
    <div className="flex gap-10 py-20 px-8">
      <Filters e={allCategories} setFiltered={setFiltered} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} propsValue={propsValue} />

      <div>
        {/* For small screen */}
        <h1 className="text-2xl font-semibold flex justify-between">
          {!filtered ? currentCategory : filtered[0]}
          <span className='flex items-center sm:hidden text-green-700 cursor-pointer'>
            <RiExpandUpDownFill />
            Filter
          </span>
        </h1>

        <div className="flex flex-wrap gap-5 py-10 my-4 border-t border-gray-400">
          {
            //  Search Through Navbar
            !filtered ? 
              (categories == 0 || categories == null)
              // If no result found
              ?<div className="flex flex-col justify-center items-center w-[100vw] text-red-500">
                <span className="text-6xl font-bold">No Result Found</span>
                <CgUnavailable className="h-[40vh] w-[40vw]" />
              </div>
              // result found, BackEnd API
              :Array.isArray(categories) && categories.map(e => {
                return e.subitems && e.subitems.map(f => {
                  return Object.keys(f).length > 6 ? <ProductCard key={f.item} e={f} title={'Categories'} />
                  : f.subitems && f.subitems.map(g => 
                    <ProductCard key={g.item} e={g} title={'Categories'} />
                  )
                })
              })

            //  Search Through Filters
            // :<FilteredComponent filtered={filtered} e={categories} />
              : <div>hi</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Categories;