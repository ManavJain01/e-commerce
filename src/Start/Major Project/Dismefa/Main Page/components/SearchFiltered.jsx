import { useMemo } from 'react'

function SearchFiltered({ filtered }){
  useMemo(()=>{
    console.log(filtered)
    if(filtered)
      return(
        <div className="bg-white min-h-20 mx-9 py-5 rounded-md">
          <div>{filtered}</div>
          <div className="font-bold text-lg py-2 px-5 rounded-md hover:bg-green-200">hi</div>
        </div>
      )
  },[filtered])
}

export default SearchFiltered;