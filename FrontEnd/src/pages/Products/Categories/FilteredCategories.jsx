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
  const { title, category, subCategory } = useParams();

  // Custom Hooks
  const { loading, getFilteredProducts } = useServices();

  // useStates
  const [categories, setCategories] = useState([])

  useEffect(()=>{    
    // Getting Data From BackEnd
    const getData = async () => {
      const res = await getFilteredProducts(
        subCategory ? {title: title, category: category, subCategory: subCategory}
        : category ? {title: title, category: category}
        : {title: title}
      );

      setCategories(res);
    }
    getData();
  },[title, category, subCategory]);

  return(
    <div className="flex gap-10 mt-40 mb-10 px-8">
      <Filters />

      <div>
        {/* For small screen */}
        <h1 className="text-2xl font-semibold flex justify-between">
          {subCategory ? subCategory : category ? category : title}
          <span className='flex items-center sm:hidden text-green-700 cursor-pointer'>
            <RiExpandUpDownFill />
            Filter
          </span>
        </h1>

        {/* Pagination */}
        <Pagination itemsPerPage={10} data={categories} loading={loading} />
      </div>
    </div>
  )
}

export default FilteredCategories;