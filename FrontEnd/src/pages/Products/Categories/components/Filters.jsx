// Importing React Icons
import { LuLoader } from "react-icons/lu";

// Importing React Packages
import { useState, useEffect } from "react";

// Importing Custom Hooks
import { useServices } from "../../../../hooks/useServices";

function Filters({ MainCategory, filtered, setFiltered }){ 
  // Custom Hooks
  const { loading, error, getFilters } = useServices();

  // useState
  const [filters, setFilters] = useState({});

  // useEffect
  useEffect(() => {
    const handleRefresh = async () => {
      const res = await getFilters(MainCategory);
      setFilters(res);
    }

    handleRefresh();
  }, []);

  if(loading) return(
    <div className="flex flex-col gap-10 mt-16">
      <div className="bg-slate-200 h-64 w-48 rounded-lg animate-pulse" />
      <div className="bg-slate-200 h-64 w-48 rounded-lg animate-pulse" />
    </div>
  )
  else return(
    <div className="hidden sm:flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Filters</h1>
      {/* First Category */}
      {filters?.categories
        && <div className="py-2 px-5 max-w-[15rem] border border-gray-400 rounded-md">
              <section className="flex justify-between gap-10 pb-3 border-b border-gray-300">
                <h2 className="font-semibold">Category</h2>
                <button onClick={() => setFiltered(filter => { return {...filter, isActive: false}})} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
              </section>

              <div className="flex flex-col gap-3 text-gray-500 text-sm my-2 max-h-[10rem] overflow-y-scroll">
                {filters?.categories?.map((e, i) => {
                  return <div key={i} className="flex gap-2">
                    <input
                      type="radio"
                      name="category"
                      // onClick={()=>setFiltered(filter => { return {...filter, filter: e, isActive: true} })}
                    />

                    <span>{e.item}</span>
                  </div>
                })}
              </div>
            </div>
      }
      
      {/* Second Category */}
      {filters?.subCategories && <div className="py-2 px-5 border max-w-[15rem] border-gray-400 rounded-md">
          <section className="flex justify-between pb-3 border-b border-gray-300">
            <h2 className="font-semibold">Sub-category</h2>
            <button onClick={() => setFiltered(filter => { return {...filter, isActive: false}})} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
          </section>

          <div className="flex flex-col gap-3 text-gray-500 text-sm mt-2 max-h-[10rem] overflow-y-scroll">
            {filters?.subCategories.map((e) => {              
              return e?.subitems && e?.subitems?.map((f, i) => {                            
                return(
                  <div key={i} className="flex gap-2">
                    <input 
                      type="radio"
                      name="subCategory"
                      // onClick={()=>setFiltered(filter => { return {...filter, filter: e, isActive: true} })}
                    />
                    <span className="whitespace-nowrap">{f}</span>
                  </div>
                )
              })
            })}
          </div>   
        </div>
      }

      {/* Third Category */}
      {/* <div className="py-2 px-5 max-w-[15rem] border border-gray-400 rounded-md">
        <section className="flex justify-between pb-3 border-b border-gray-300">
          <h2 className="font-semibold">Brands</h2>
          <button onClick={() => setFiltered(filter => { return {...filter, isActive: false}})} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
        </section>

        <div className="flex flex-col gap-3 text-gray-500 text-sm my-2 max-h-[10rem] overflow-y-scroll">
          {categories.map((e) => e.subitems.map((e, i) => {
            return(
              <div key={i} className="flex gap-2">
                <input 
                  type="radio"
                  name="brand"
                  onClick={()=>setFiltered(filter => { return {...filter, filter: e, isActive: true} })} />
                <span>{e.company}</span>
              </div>
            )
          }))
          }
        </div>
      </div> */}
    </div>
  )
}

export default Filters;


// categories && categories.map((f)=>
//   f.subitems && f.subitems.map(g => g.subitems && g.subitems.map(h => {
//     return  <div key={h.company} className="flex gap-2">
//       <input type="checkbox" onClick={()=>setFiltered(g)} />
//       <span>{h.company}</span>
//     </div>
//   })))