
function Filters({ e, isCategory }){

  console.log(e[0].list)

  return(
    <div className="flex flex-col gap-4 py-2 px-8">
      <h1 className="text-2xl font-semibold">Filters</h1>
      <div className="py-2 px-5 border border-gray-400 rounded-md">
        <section className="flex justify-between pb-3 border-b border-gray-300">
          <h2 className="font-semibold">Category</h2>
          <button className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
        </section>

        <div className="flex flex-col gap-3 text-gray-500 text-sm my-2 h-[10rem] overflow-y-scroll">
          {isCategory ? "hi"
            :e[0].list.map(f=>(
              <div key={f.name} className="flex gap-2">
                <input type="checkbox" className=""></input>
                <span>{f.name}</span>
              </div>
            ))
          }
        </div>
      </div>

      <div className="py-2 px-5 border border-gray-400 rounded-md">
        <section className="flex justify-between pb-3 border-b border-gray-300">
          <h2 className="font-semibold">Sub-category</h2>
          <button className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
        </section>

        <div className="flex flex-col gap-1 text-gray-500 text-sm mt-2 h-[10rem] overflow-y-scroll">
          {isCategory ? "hi"
            :e[0].list.map(f=>(
              <div key={f.name} className="flex flex-col gap-3">
                {f.subList && f.subList.map((g)=>
                  <div key={g.subItems} className="flex gap-2">
                    <input type="checkbox" className=""></input>
                    <span>{g.subItems}</span>
                  </div>
                )}
              </div>       
            ))
          }
        </div>
      </div>

      {/* {e[0].list[1].subList && */}
        {e[0].list.map(f=>{
          <div key={f.name} className="py-2 px-5 border border-gray-400 rounded-md">
            <section className="flex justify-between pb-3 border-b border-gray-300">
              <h2 className="font-semibold">Sub-category</h2>
              <button className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
            </section>

            <div className="flex flex-col gap-1 text-gray-500 text-sm mt-2 h-[10rem] overflow-y-scroll">
              {f.subList && f.subList.map((g)=>
                <div key={g.subItems} className="flex gap-2">
                  <input type="checkbox" className=""></input>
                  <span>{g.subItems}</span>
                </div>
              )}
            </div>   
          </div>
        })
      }


      <div className="py-2 px-5 border border-gray-400 rounded-md">
        <section className="flex justify-between pb-3 border-b border-gray-300">
          <h2 className="font-semibold">Brands</h2>
          <button className="text-red-600 font-semibold text-sm active:text-red-800">Clear</button>
        </section>

        <div className="flex gap-3 my-2">
          <input type="checkbox" className=""></input>
          <p className="text-gray-500 text-sm">hi</p>
        </div>
      </div>
    </div>
  )
}

export default Filters;