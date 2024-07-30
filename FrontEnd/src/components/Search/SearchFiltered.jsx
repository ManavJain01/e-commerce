// Importing React Icons
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

// Importing React Packages
import { Link } from 'react-router-dom'

function SearchFiltered({ filtered, setFiltered }){
  function clearSearch(){
    setFiltered("")
  }

  if((filtered && filtered != "")) return(
    <div onClick={()=>clearSearch()} className="bg-white font-bold text-lg flex flex-col max-h-[15rem] mx-9 py-2 rounded-md shadow-md shadow-gray-500 overflow-y-scroll">
      {filtered && filtered != "" && filtered.map((e) => {
        return(
          <Link 
          key={e.id}
          to={e.path}
          state={{value: [e.type,e.type,e.type]}}
          className="p-2 hover:bg-green-200 flex items-center justify-between">
            {e.type}
            <CiSearch className="size-7 text-green-500" />
          </Link>
        )
      })}
    </div>)
}


export default SearchFiltered;