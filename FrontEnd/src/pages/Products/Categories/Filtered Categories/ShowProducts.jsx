// Importing React Icons
import { CgUnavailable } from "react-icons/cg";

// Imaporting Local Files
import ProductCard from '../../../../components/Product Card/ProductCard'
import ShimmerEffect from "./ShimmerEffect";

export default function ShowProducts({ loading=false, filtered=[], categories=[] }) {
  return (
    <div className="flex flex-wrap gap-5 py-10 my-4 border-t border-gray-400">
      {
        loading ? <ShimmerEffect />
        //  Search Through Navbar
        : (categories == 0 || categories == null)
          // If no result found
          ?<div className="flex flex-col justify-center items-center w-[100vw] text-red-500">
            <span className="text-6xl font-bold">No Result Found</span>
            <CgUnavailable className="h-[40vh] w-[40vw]" />
          </div>
          // result found, BackEnd API
          :Array.isArray(categories) && categories.map(e => {
            return e.subitems && e.subitems.map(f => {
              return Object.keys(f).length > 6
              ? <ProductCard key={f.item} e={f} title={'Categories'} categoryId={e?._id} />
              : f.subitems && f.subitems.map(g => 
                <ProductCard key={g.item} e={g} title={'Categories'} categoryId={e?._id} />
              )
            })
          })
      }
    </div>
  )
}