import { Link } from 'react-router-dom'


import { medicines } from './MedicinesAPI'
import ProductCard from '../../Product Card/components/ProductCard'
import ProductCard2 from '../../Product Card/components/ProductCard2'

function MedicinePage(){
  const medicinesList = medicines.filter(e => e.type.includes('Medicines'))[0].list

  return(
    <>
      <div className="mx-10 mt-20 p-10 border rounded-t-md shadow-md shadow-gray-700">
        <section className="flex flex-col gap-3">
          <h1 className="font-semibold text-4xl">All Medicine List</h1>
          <span className="text-lg">Find your medicines here</span>
        </section>

        <div to="/Home" className="mt-10 flex flex-wrap gap-2">
          {medicinesList.map((e)=><ProductCard e={e} key={e.name} />)}
        </div>

        <Link to="/Products" className=''>Click ME :)</Link>
      </div>
    </>
  )
}

export default MedicinePage;