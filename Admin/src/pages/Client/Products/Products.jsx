// Importing React Packages
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// Importing Axios Packages
import axios from 'axios'

export default function Products() {
  // getting darkTheme state
  const [darkTheme] = useOutletContext();

  // Variables
  const categories = ["Medicines", "Personal care", "Health Conditions", "Vitamins & Supplements", "Diabetes Care", "Healthcare Devices"]

  // UseState
  // const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  // UseEffects
  // useEffect(() => {
  //   // Getting Data From BackEnd
  //   const getData = async () => {
  //     const allData = await axios.get(`${import.meta.env.VITE_REACT_APP_Clients_Server_Location}/Categories/`)

  //     setProducts(allData.data)
  //   }
  //   getData();
  // }, [])

  // Getting Data From BackEnd
  const getSubcategories = async (category) => {
    const data = await axios.post(`${import.meta.env.VITE_REACT_APP_Clients_Server_Location}/Categories/${category}}`, { data : category })
    setFilters(filter => { return {...filter, filters: data?.data?.filters} })
    if(filters.length != 0) document.getElementById('subcategory').style.display = "flex"
  }
  
  return (
    <div className="flex flex-col gap-10">
      <span>
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="text-green-600">All Products Available</p>
      </span>

      <div className="flex flex-col gap-10">
        <p className="font-bold text-3xl">Categories</p>

        <div className="font-bold text-xl flex gap-8 flex-wrap">{categories.map((e, i) => {
          return(
            <button key={i} onClick={() => getSubcategories(e)} className={`${darkTheme ? "bg-gray-900 hover:text-blue-500" : "bg-[#fcecc4] hover:text-[#ca9509]"} px-5 py-2 rounded-md`}>
              {e}
            </button>
          )
        })}</div>

        <div id="subcategory" className="hidden flex-col gap-8">
          <p className="font-bold text-3xl">Sub Categories</p>

          <div className="font-bold text-3xl flex gap-5 flex-wrap whitespace-nowrap">{filters?.filters?.category.map((e, i) => {
            return(
              <div key={i} className={`${darkTheme ? "bg-gray-900 hover:text-blue-500" : "bg-[#fcecc4] hover:text-[#ca9509]"} px-5 py-2 rounded-md`}>
                <span>{e}</span>
              </div>
            )
          })}</div>

          {filters?.filters?.subCategory.length != 0
            &&  <div className="flex flex-col gap-10">
                  <p className="font-bold text-3xl">More Categories</p>

                  <div className="font-bold text-3xl flex gap-5 flex-wrap whitespace-nowrap">{filters?.filters?.subCategory.map((e, i) => {
                    return(
                      <div key={i}className={`${darkTheme ? "bg-gray-900 hover:text-blue-500" : "bg-[#fcecc4] hover:text-[#ca9509]"} px-5 py-2 rounded-md`}>
                        {e}
                      </div>
                    )
                  })}</div>
                </div>
          }
        </div>
      </div>
    </div>
  )
}