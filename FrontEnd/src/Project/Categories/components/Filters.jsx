function Filters({ e, setFiltered, currentCategory, setCurrentCategory, propsValue }){  

  return(
    <div className="hidden sm:flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Filters</h1>
      <div className="py-2 px-5 max-w-[15rem] border border-gray-400 rounded-md">
        <section className="flex justify-between pb-3 border-b border-gray-300">
          <h2 className="font-semibold">Category</h2>
          <button onClick={() => setFiltered(false)} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
        </section>

        <div className="flex flex-col gap-3 text-gray-500 text-sm my-2 max-h-[10rem] overflow-y-scroll">
          {e && e.map((f) => {
            return <div key={f[0].category} className="flex gap-2">
              <input 
                type="radio"
                name="category"
                onClick={(x)=>setFiltered(["hi" ,f])} />
              <span>{f[0].category}</span>
            </div>
          })}
        </div>
      </div>

      {e && <div className="py-2 px-5 border max-w-[15rem] border-gray-400 rounded-md">
          <section className="flex justify-between pb-3 border-b border-gray-300">
            <h2 className="font-semibold">Sub-category</h2>
            <button onClick={() => setFiltered(false)} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
          </section>

          <div className="flex flex-col gap-3 text-gray-500 text-sm mt-2 max-h-[10rem] overflow-y-scroll">
            {e.map((f)=> 
            {
              // console.log(f);
            }
              // <div key={g.subItems} className="flex gap-2">
              //   <input
              //     type="radio"
              //     name="sub-category"
              //     onClick={()=>setFiltered([g.subItems, f.name, e[0].type])}
              //     className=""></input>
              //   <span>{g.subItems}</span>
              // </div>
              
            )}
          </div>   
        </div>
      }


      {/* <div className="py-2 px-5 max-w-[15rem] border border-gray-400 rounded-md">
        <section className="flex justify-between pb-3 border-b border-gray-300">
          <h2 className="font-semibold">Brands</h2>
          <button onClick={() => setFiltered(false)} className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
        </section>

        <div className="flex flex-col gap-3 text-gray-500 text-sm my-2 max-h-[10rem] overflow-y-scroll">
          {e[0].list.map((f)=>
              f.subList && f.subList.map((g)=>
                g.Items && g.Items.map((h)=>
                  <div key={h.item} className="flex gap-2">
                    <input type="checkbox" onClick={()=>setFiltered([h.company, g.subItems ,f.name, e[0].type])} />
                    <span>{h.company}</span>
                  </div>
                )
              )
            )
          }
        </div>
      </div> */}
    </div>
  )
}

export default Filters;