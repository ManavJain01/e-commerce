// Importing React Icons
import { RiExpandUpDownFill } from "react-icons/ri";
import { CgUnavailable } from "react-icons/cg";
import { LuLoader } from "react-icons/lu";

// Importing React Packages
import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect, useMemo } from "react";

// Imaporting Local Files
import ProductCard from '../../../components/Product Card/ProductCard'

// Importing Custom Hooks
import { useServices } from "../../../hooks/useServices";

import Filters from './components/Filters'
import FilteredComponent from './components/FilteredComponent';

function FilteredCategories(){
  let propsValue;
  if(useLocation().state) propsValue = useLocation().state.value;
  else propsValue = useParams()

  // Custom Hooks
  const {  loading, error, getFilteredProducts, getAllProducts } = useServices();

  // useStates
  const [filtered, setFiltered] = useState({ isActive:false })
  const [categoryTitle, setCategoryTitle] = useState(Array.isArray(propsValue) ? propsValue[0] : propsValue)
  const [categories, setCategories] = useState([])
  const [allCategories, setAllCategories] = useState([])

  useEffect(()=>{
    setFiltered(false);
    
    // Getting Data From BackEnd
    const getData = async () => {

      const filteredData = await getFilteredProducts(propsValue);
      // const allData = await getAllProducts();

      setCategories(filteredData?.data)
      // setAllCategories(allData)
      setFiltered({ filters: filteredData?.data?.filters, isActive: false })
    }
    getData();

    setCategoryTitle(Array.isArray(propsValue) ? propsValue[0] : propsValue)

  },[propsValue]);

  if(loading) return(
    <span className="my-40"><LuLoader className="text-green-700 size-32 mx-auto animate-spin" /></span>
  )
  else return(
    <div className="flex gap-10 mt-40 px-8">
      <Filters MainCategory={Array.isArray(propsValue) ? propsValue[1] : propsValue} filtered={filtered} setFiltered={setFiltered} />

      <div>
        {/* For small screen */}
        <h1 className="text-2xl font-semibold flex justify-between">
          {!filtered ? categoryTitle : filtered[0]}
          <span className='flex items-center sm:hidden text-green-700 cursor-pointer'>
            <RiExpandUpDownFill />
            Filter
          </span>
        </h1>

        <div className="flex flex-wrap gap-5 py-10 my-4 border-t border-gray-400">
          {
            //  Search Through Navbar
            !filtered.isActive ? 
              (categories == 0 || categories == null) && !filtered.filters
              // If no result found
              ?<div className="flex flex-col justify-center items-center w-[100vw] text-red-500">
                <span className="text-6xl font-bold">No Result Found</span>
                <CgUnavailable className="h-[40vh] w-[40vw]" />
              </div>
              // result found, BackEnd API
              :Array.isArray(categories) && categories.map(e => {
                return e.subitems && e.subitems.map(f => {
                  return Object.keys(f).length > 6
                  ? <ProductCard key={f.item} e={f} title={'Categories'} />
                  : f.subitems && f.subitems.map(g => 
                    <ProductCard key={g.item} e={g} title={'Categories'} />
                  )
                })
              })

            //  Search Through Filters
            // :<FilteredComponent filtered={filtered} e={categories} />
              : filtered?.filter
                &&  <div className="flex flex-wrap gap-5">{
                  categories
                    .filter(e => e.subCategory == filtered?.filter || e.item == filtered?.filter)
                    .map((e) => e.subitems.map((f, i) => {
                      return(
                        <ProductCard key={i} e={f} title={'Categories'} />
                      )
                    }))
                }</div>
          }
        </div>
      </div>
    </div>
  )
}

export default FilteredCategories;