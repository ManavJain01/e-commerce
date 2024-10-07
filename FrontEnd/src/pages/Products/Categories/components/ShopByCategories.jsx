// Importing React Icons
import { LuLoader } from "react-icons/lu";

// Importing React Packages
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Importing Custom Hooks
import { useServices } from "../../../../hooks/useServices"

// Importing Local Files
import { handleResize } from "../../../../components/Screen Resize/ScreenResize";
  

export default function ShopByCategories(){
  // variables
  const colors = ["bg-blue-200", "bg-purple-300", "bg-green-200", "bg-yellow-200", "bg-pink-200", "bg-red-200", "bg-orange-200", "bg-lime-200", "bg-emerald-200", "bg-teal-200"];
  let afterFetching = false;

  // useState
  const [categories, setCategories] = useState([])
  const [filteredCategory, setFilteredCategory] = useState("")
  const [smallScreen, setSmallScreen] = useState(false);

  // Custom Hooks
  const { loading, error, getNavOptions } = useServices();

  // useEffect
  useEffect(()=>{  
    // Getting Data From BackEnd
    const getData = async () => {
      const response = await getNavOptions();
      afterFetching = true;
      setCategories(response);

      
      // Automatically click "Personal Care" button if it exists
      const personalCareCategory = response?.find(e => e.item === "Personal care");
      
      if(personalCareCategory) {
        setFilteredCategory([colors[response.indexOf(personalCareCategory)-1], personalCareCategory]);
      }
    }

    const resizeHandler = () => handleResize(setSmallScreen);

    // Call handleResize initially
    getData();
    resizeHandler();

    // Add event listener
    window.addEventListener('resize', resizeHandler);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  if((afterFetching && Array.isArray(categories) && categories.length < 1) || !Array.isArray(categories)) return;
  else return (
    <div className="flex flex-col gap-8 p-5 border-[1px] border-blue-300 rounded-md">
      {/* Headline with a button */}
      <div className="flex justify-between">
        <p className="font-semibold text-3xl text-gray-500">Shop by categories</p>
        {location.pathname != '/Categories' && <Link to="/Categories" className="font-semibold text-lg text-blue-600">View All</Link>}
      </div>

      {/* Categories */}
      <div className={`flex ${smallScreen && !loading && "flex-wrap" } ${smallScreen && loading && "gap-10 justify-around"}`}>
        {/* Category Headline */}
        <div className={`relative flex ${smallScreen ? "flex-row overflow-x-scroll" : "flex-col"} items-start`}>
        {loading
          ?<div className={`flex ${smallScreen ? "gap-5" : "flex-col"} justify-between h-full mr-5 animate-pulse`}>
            <div className={`bg-blue-200 ${smallScreen ? "w-32 h-28" : "w-64 h-32"} rounded-xl`} />
            <div className={`bg-blue-200 ${smallScreen ? "w-32 h-28" : "w-64 h-32"} rounded-xl`} />
            <div className={`bg-blue-200 ${smallScreen ? "w-32 h-28" : "w-64 h-32"} rounded-xl`} />
          </div>
          :Object.keys(categories).length != 0 && categories
            ?.filter(e => e.item != 'Medicines' && e.item != 'Health Article')
            ?.map((e,i) => {
              return(
                <button
                  key={i}
                  id="categoryBtn"
                  onClick={() => setFilteredCategory([colors[i], e])}
                  className={`${filteredCategory[1]?.item == e.item && colors[i]} relative flex ${smallScreen ? "flex-col h-full rounded-t-md" : "left-2 flex-row rounded-l-md"}  items-center gap-5 w-full p-5`}>
                    {e?.img && <img src={e?.img} alt="image" className="w-20 rounded-full" />}        
                    <span>{e.item}</span>
                </button>
              )
        })}
        </div>

        {/* Sub Category */}
        <div className={`custom_scroll1 flex-1 ${loading ? "" : filteredCategory[0] + " p-5 overflow-y-scroll"} max-h-[50rem] flex gap-8 items-start flex-wrap rounded-md`}>
          {loading
            ?<div className={`bg-blue-100 flex ${smallScreen ? "flex-wrap" : "flex-col gap-5"} justify-around w-full h-[30rem] animate-pulse`}>
              <div className={`flex ${smallScreen ? "gap-10" : "px-10"} justify-between`}>
                <div className={`bg-white ${smallScreen ? "w-32 h-28" : "w-48 h-40 lg:w-56 lg:h-40 xl:w-64 xl:h-44"} rounded-xl`} />
                <div className={`bg-white ${smallScreen ? "w-32 h-28" : "w-48 h-40 lg:w-56 lg:h-40 xl:w-64 xl:h-44"} rounded-xl`} />
                <div className={`bg-white ${smallScreen ? "w-32 h-28" : "w-48 h-40 lg:w-56 lg:h-40 xl:w-64 xl:h-44"} rounded-xl`} />
              </div>

              <div className={`flex ${smallScreen ? "gap-10" : "px-10"} justify-between`}>
                <div className={`bg-white ${smallScreen ? "w-32 h-28" : "w-48 h-40 lg:w-56 lg:h-40 xl:w-64 xl:h-44"} rounded-xl`} />
                <div className={`bg-white ${smallScreen ? "w-32 h-28" : "w-48 h-40 lg:w-56 lg:h-40 xl:w-64 xl:h-44"} rounded-xl`} />
                <div className={`bg-white ${smallScreen ? "w-32 h-28" : "w-48 h-40 lg:w-56 lg:h-40 xl:w-64 xl:h-44"} rounded-xl`} />
              </div>
            </div>
            :filteredCategory && filteredCategory[1]?.subitems
            ?.map((e, i) => {              
              return(
                <Link key={i} to={`/Categories/${filteredCategory[1].item}/${e.item}`} className={`relative ${smallScreen ? "h-32 w-28 p-1" : "h-64 w-80 p-5"} flex flex-col bg-white rounded-md shadow-lg`}>
                  <span className={`font-semibold text-gray-600 ${smallScreen ? "text-xs" : "text-lg"}`}>{e?.item || e}</span>
                  
                  {e?.img && <img src={e?.img} alt="image" className={`absolute mx-auto ${smallScreen ? "w-16 top-10" : "top-[70px] left-20 w-44"}`} />}
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}