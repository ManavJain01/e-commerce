// Importing React Packages
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Importing Axios Packages
import axios from 'axios'

export default function ShopByCategories(){
  // variables
  const colors = ["bg-blue-200", "bg-purple-300", "bg-green-200", "bg-yellow-200", "bg-pink-200", "bg-red-200", "bg-orange-200", "bg-lime-200", "bg-emerald-200", "bg-teal-200"]

  // useState
  const [categories, setCategories] = useState([])
  const [filteredCategory, setFilteredCategory] = useState("")

  // useEffect
  useEffect(()=>{  
    // Getting Data From BackEnd
    const getData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/NavOptions`)
      setCategories(response.data)
    }

    setTimeout(() => {
      document.getElementById("categoryBtn")?.click();
    }, 30)

    getData();
  }, [])

  return (
    <div className="flex flex-col gap-8 p-5 border-[1px] border-blue-300 rounded-md">
      {/* Headline with a button */}
      <div className="flex justify-between">
        <p className="font-semibold text-3xl text-gray-500">Shop by categories</p>
        {location.pathname != '/Categories' && <Link to="/Categories" className="font-semibold text-lg text-blue-600">View All</Link>}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap">
        {/* Category Headline */}
        <div className="relative flex flex-col items-start">
        {categories
          ?.filter(e => e.item != 'Medicines' && e.item != 'Health Article')
          ?.map((e,i) => {
            return(
              <button
                key={i}
                id="categoryBtn"
                onClick={() => setFilteredCategory([colors[i], e])}
                className={`${filteredCategory[1]?.item == e.item ? colors[i] : ""} relative left-2 flex items-center gap-5 w-full p-5 rounded-l-md`}>
                  {e?.img && <img src={e?.img} alt="image" className="w-20 rounded-full" />}        
                  <span>{e.item}</span>
              </button>
            )
        })}
        </div>

        {/* Sub Category */}
        <div className={`flex-1 ${filteredCategory[0]} max-h-[50rem] flex gap-8 items-start flex-wrap p-5 rounded-md overflow-y-scroll`}>
          {filteredCategory && filteredCategory[1]?.subitems
            ?.map((e, i) => {
              return(
                <Link key={i} to={`/Categories/${e.item || e}`} state={{value: [e.item || e, filteredCategory[1]?.item]}} className="relative w-80 h-64 flex flex-col bg-white p-5 rounded-md shadow-lg">
                  <span className="font-semibold text-lg text-gray-600">{e?.item || e}</span>
                  
                  {e?.img && <img src={e?.img} alt="image" className="absolute top-[70px] left-20 w-44 mx-auto" />}
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}