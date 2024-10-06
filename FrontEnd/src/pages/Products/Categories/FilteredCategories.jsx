// Importing React Icons
import { RiExpandUpDownFill } from "react-icons/ri";

// Importing React Packages
import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";

// Imaporting Local Files
import Filters from './Filtered Categories/Filters'
import Pagination from "./Filtered Categories/Pagination";

// Importing Custom Hooks
import { useServices } from "../../../hooks/useServices";

function FilteredCategories(){
  let propsValue;
  if(useLocation().state) propsValue = useLocation().state.value;
  else propsValue = useParams()

  // Custom Hooks
  const { loading, error, getFilteredProducts, getAllProducts } = useServices();

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

  return(
    <div className="flex gap-10 mt-40 mb-10 px-8">
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

        {/* Pagination */}
        <Pagination itemsPerPage={10} data={categories} loading={loading} filtered={filtered} categories={categories} />
      </div>
    </div>
  )
}

export default FilteredCategories;