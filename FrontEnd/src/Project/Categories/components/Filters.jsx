function Filters({ e, categories, setFiltered }){  
  return(
    <div className="hidden sm:flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Filters</h1>
      <div className="py-2 px-5 max-w-[15rem] border border-gray-400 rounded-md">
        <section className="flex justify-between gap-10 pb-3 border-b border-gray-300">
          <h2 className="font-semibold">Category</h2>
          <button onClick={() => setFiltered(false)} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
        </section>

        <div className="flex flex-col gap-3 text-gray-500 text-sm my-2 max-h-[10rem] overflow-y-scroll">
          {categories && categories.map((f) => {
            return <div key={f.item} className="flex gap-2">
              <input 
                type="radio"
                name="category"
                onClick={(x)=>setFiltered(f)} />
              <span>{f.item}</span>
            </div>
          })}
        </div>
      </div>

      {categories && <div className="py-2 px-5 border max-w-[15rem] border-gray-400 rounded-md">
          <section className="flex justify-between pb-3 border-b border-gray-300">
            <h2 className="font-semibold">Sub-category</h2>
            <button onClick={() => setFiltered(false)} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
          </section>

          <div className="flex flex-col gap-3 text-gray-500 text-sm mt-2 max-h-[10rem] overflow-y-scroll">
            {categories.map((f)=> f.subitems && f.subitems.map(g =>
              (Object.keys(g).length <= 4) && <div key={g.item} className="flex gap-2">
                <input
                  type="radio"
                  name="sub-category"
                  onClick={()=>setFiltered([g.subItems, f.name, e[0].type])}
                  className="" />
                <span>{g.item}</span>
              </div>
            ))}
          </div>   
        </div>
      }


      <div className="py-2 px-5 max-w-[15rem] border border-gray-400 rounded-md">
        <section className="flex justify-between pb-3 border-b border-gray-300">
          <h2 className="font-semibold">Brands</h2>
          <button onClick={() => setFiltered(false)} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
        </section>

        <div className="flex flex-col gap-3 text-gray-500 text-sm my-2 max-h-[10rem] overflow-y-scroll">
          {categories && categories.map((f)=>
            f.subitems && f.subitems.map(g => g.subitems && g.subitems.map(h => {
              return  <div key={h.company} className="flex gap-2">
                <input type="checkbox" onClick={()=>setFiltered(g)} />
                <span>{h.company}</span>
              </div>
            })))
          }
        </div>
      </div>
    </div>
  )
}

export default Filters;