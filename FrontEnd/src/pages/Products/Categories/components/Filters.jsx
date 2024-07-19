function Filters({ categories, filtered, setFiltered }){ 
  return(
    <div className="hidden sm:flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Filters</h1>
      {/* First Category */}
      {filtered?.filters?.category
        && <div className="py-2 px-5 max-w-[15rem] border border-gray-400 rounded-md">
              <section className="flex justify-between gap-10 pb-3 border-b border-gray-300">
                <h2 className="font-semibold">Category</h2>
                <button onClick={() => setFiltered(filter => { return {...filter, isActive: false}})} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
              </section>

              <div className="flex flex-col gap-3 text-gray-500 text-sm my-2 max-h-[10rem] overflow-y-scroll">
                {filtered?.filters?.category.map((e, i) => {
                  return <div key={i} className="flex gap-2">
                    <input
                      type="radio"
                      name="category"
                      onClick={()=>setFiltered(filter => { return {...filter, filter: e, isActive: true} })} />

                    <span>{e}</span>
                  </div>
                })}
              </div>
            </div>
      }
      
      {/* Second Category */}
      {filtered?.filters?.subCategory && <div className="py-2 px-5 border max-w-[15rem] border-gray-400 rounded-md">
          <section className="flex justify-between pb-3 border-b border-gray-300">
            <h2 className="font-semibold">Sub-category</h2>
            <button onClick={() => setFiltered(filter => { return {...filter, isActive: false}})} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
          </section>

          <div className="flex flex-col gap-3 text-gray-500 text-sm mt-2 max-h-[10rem] overflow-y-scroll">
            {filtered?.filters?.subCategory.map((e, i) => {
              return(
                <div key={i} className="flex gap-2">
                  <input 
                    type="radio"
                    name="subCategory"
                    onClick={()=>setFiltered(filter => { return {...filter, filter: e, isActive: true} })} />
                  <span className="whitespace-nowrap">{e}</span>
                </div>
              )
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