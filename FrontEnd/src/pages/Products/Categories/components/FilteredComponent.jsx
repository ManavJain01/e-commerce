import { useState, useEffect, useMemo } from 'react'

import ProductCard from '../../../../components/Product Card/ProductCard'

function FilteredComponent({ filtered, e }){
  const[selectDiv, setSelectDiv] = useState(filtered.length)

  // console.log(e[0]) 
  // console.log(filtered) 
  useMemo(() => {
    setSelectDiv(filtered.length)
  },[filtered])

  // For Filtering By Category
  if(selectDiv == 2)
  return <div className="flex flex-wrap gap-5">
      {
        e[0].list.map((f) => {
          if (f.name == filtered[0] && f.subList) return f.subList.map((g) => {
            return g.Items && g.Items.map((h) => {
              return  <ProductCard key={h.item} e={h} title='Categories' />
            })
          })  
          else if(f.name == filtered[0] && !f.subList) return f.Items && f.Items.map((g) =>{
            return<ProductCard key={g.item} e={g} title='Categories' />
          })
        })
      }
    </div>


// For Filtering By SubCategory
  if(selectDiv == 3)
  return <div className='flex flex-wrap gap-5'>
      {
        e[0].list.map((f) => {
          if(f.name == filtered[1] && f.subList) return f.subList.map((g) => {
            return g.subItems == filtered[0] && g.Items && g.Items.map((h) => {
              return  <ProductCard key={h.item} e={h} title='Categories' />
            })
          })
        })
      }
    </div>
  
  // For Filtering By Brands
  if(selectDiv == 4)
  return <div className='flex flex-wrap gap-5'>
    {
      e[0].list.map((f) => {
        if(f.subList) return f.subList.map((g) => {
          return g.Items && g.Items.map((h) => {
            if(h.company == filtered[0]) return <ProductCard key={h.item} e={h} title='Categories' />  
          })
        })
        
        if(!f.subList && f.Items) return f.Items.map((g) => {
          if(g.company == filtered[0]) return <ProductCard key={g.item} e={g} title='Categories' />
        })
      })
    }
  </div>
}

export default FilteredComponent;