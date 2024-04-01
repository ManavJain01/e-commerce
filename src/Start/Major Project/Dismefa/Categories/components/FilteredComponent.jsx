import { useState, useEffect } from 'react'

function FilteredComponent({ filtered, e }){
  const[selectDiv, setSelectDiv] = useState(filtered.length)
  // console.log(filtered)

  if(selectDiv == 2) return <div>2</div>
  if(selectDiv == 3) return <div>3</div>
  if(selectDiv == 4) return <div>4</div>
}

export default FilteredComponent;