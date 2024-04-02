import { medicines } from './MedicinesAPI'
import ProductCard from '../../Product Card/components/ProductCard'

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
          {medicinesList.map((e)=>(
            <ProductCard key={e.name} e={e} title={'MedicinePage'} />
            ))}
        </div>

      </div>
    </>
  )
}

export default MedicinePage;