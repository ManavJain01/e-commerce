import { Link } from 'react-router-dom'

function SearchFiltered({ filtered, setFiltered }){
  if(filtered && filtered != "")  return(
    <div className="bg-white font-bold text-lg flex flex-col mx-9 py-2 rounded-md shadow-md shadow-gray-500">
      {filtered && filtered.map((e) => {
        return(
          <Link 
          key={e.id}
          to={e.path}
          state={{value: [e.type,e.type,e.type]}}
          onClick={()=>setFiltered("")}
          className="p-2 hover:bg-green-200">
            {e.type}
          </Link>
        )
      })}
    </div>)
}


export default SearchFiltered;