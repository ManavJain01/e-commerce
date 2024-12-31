// Importing React Packages
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// Importing Custom Hooks
import { useClient } from "../../../hooks/useClient";

// Importing local files
import Sidebar from './components/sidebar'
import CreateProduct from "./CreateProduct";

export default function Products() {
  // Custom Data
  const { loading, error, getSubcategories } = useClient();

  // getting darkTheme state
  const [darkTheme] = useOutletContext();

  // Variables
  const categories = ["Medicines", "Personal care", "Health Conditions", "Vitamins & Supplements", "Diabetes Care", "Healthcare Devices"]

  // UseState
  // const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  const fn = async (e) => {
    const data = await getSubcategories(e);
    setFilters(filter => { return {...filter, filters: data?.data?.filters} })
    if(filters.length != 0) document.getElementById('subcategory').style.display = "flex"
    else document.getElementById('subcategory').style.display = "none"
  }
  
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <span>
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="text-green-600">All Products Available</p>
        </span>

        <select name="categories" id="categories" onChange={(e)=>fn(e)} className="font-bold text-black text-xl flex flex-col gap-8 items-start h-fit p-1 rounded-md">{categories.map((e, i) => {
          return(
            <option
              key={i}
              value={e}
              className={`${darkTheme ? "text-white bg-gray-900 hover:text-blue-500" : "text-black bg-[#fcecc4] hover:text-[#ca9509]"} text-start w-full px-5 py-2`}
            >
              {e}
            </option>
          )
        })}</select>
      </div>

      <div className="flex gap-2">
        <Sidebar darkTheme={darkTheme} categories={categories} filters={filters} setFilters={setFilters} />

        <div></div>
      </div>

      {/* Create Products */}
      <CreateProduct darkTheme={darkTheme} />
    </div>
  )
}