import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

import { Link } from 'react-router-dom'

function SearchFiltered({ filtered, filtered2, filtered3, filtered4, filtered5, setFiltered, setFiltered2, setFiltered3, setFiltered4, setFiltered5 }){
  if((filtered && filtered != "") || (filtered2 && filtered2 != "") || (filtered3 && filtered3 != "") || (filtered4 && filtered4 != "") || (filtered5 && filtered5 != "")) return(
    <div className="bg-white font-bold text-lg flex flex-col max-h-[15rem] mx-9 py-2 rounded-md shadow-md shadow-gray-500 overflow-y-scroll">
      {filtered && filtered != "" && filtered.map((e) => {
        return(
          <Link 
          key={e.id}
          to={e.path}
          state={{value: [e.type,e.type,e.type]}}
          onClick={()=>setFiltered("")}
          className="p-2 hover:bg-green-200 flex items-center justify-between">
            {e.type}
            <CiSearch className="size-7 text-green-500" />
          </Link>
        )
      })}

      {filtered2 && filtered2.map((e) => {
        if(e.company) return(
          <Link
          key={e.name}
          to='/Products/parameter-data'
          state={{value: e}}
          onClick={()=>setFiltered2("")}
          className="p-2 hover:bg-green-200 flex items-center justify-between">
            {e.name}
            <FaArrowRight className="size-7 text-green-500" />
          </Link>
        )
        else return(
          <Link
          key={e.name}
          onClick={()=>setFiltered2("")}
          className="p-2 hover:bg-green-200 flex items-center justify-between">
            {e.name}
            <CiSearch className="size-7 text-green-500" />
          </Link>
        )
      })}

      {filtered3 && filtered3.map((e) =>{
        return(
          <Link
          key={e.name}
          to='/Products/parameter-data'
          state={{value: e}}
          onClick={()=>setFiltered3("")}
          className="p-2 hover:bg-green-200 flex items-center justify-between">
            {e.name}
            <FaArrowRight className="size-7 text-green-500" />
          </Link>
        )
      })}

      {filtered4 && filtered4.map((e) =>{
        return(
          <Link
          key={e.subItems}
          onClick={()=>setFiltered4("")}
          className="p-2 hover:bg-green-200 flex items-center justify-between">
            {e.subItems}
            <CiSearch className="size-7 text-green-500" />
          </Link>
        )
      })}

      {filtered5 && filtered5.map((e) =>{
        return(
          <Link
          key={e.name}
          to='/Products/parameter-data'
          state={{value: e}}
          onClick={()=>setFiltered5("")}
          className="p-2 hover:bg-green-200 flex items-center justify-between">
            {e.name}
            <FaArrowRight className="size-7 text-green-500" />
          </Link>
        )
      })}
    </div>)
}


export default SearchFiltered;