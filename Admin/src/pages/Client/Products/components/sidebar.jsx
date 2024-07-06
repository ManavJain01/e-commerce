export default function sidebar({ darkTheme, categories, filters, setFilters }) {

  return (
    <div id="subcategory" className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4]"} hidden flex-col gap-5 w-[20rem] py-5 rounded-md`}>
      <p className="text-3xl font-bold w-fit px-5">Sub Categories</p>

      <div className="font-bold  flex flex-col gap-2 h-[15rem] overflow-y-scroll">{filters?.filters?.category.map((e, i) => {
        return(
          <div key={i} className={`${darkTheme ? "bg-gray-900 hover:text-blue-500" : "bg-[#fcecc4] hover:text-[#ca9509]"} px-5 py-2 rounded-md`}>
            <span>{e}</span>
          </div>
        )
      })}</div>

      <hr />

      {filters?.filters?.subCategory.length != 0
        &&  <div className="flex flex-col gap-5">
              <p className="font-bold text-3xl px-5">More Categories</p>

              <div className="font-bold flex flex-col gap-2 h-[30rem] overflow-y-scroll">{filters?.filters?.subCategory.map((e, i) => {
                return(
                  <div key={i}className={`${darkTheme ? "bg-gray-900 hover:text-blue-500" : "bg-[#fcecc4] hover:text-[#ca9509]"} px-5 py-2 rounded-md`}>
                    {e}
                  </div>
                )
              })}</div>
            </div>
      }
    </div>
  )
}