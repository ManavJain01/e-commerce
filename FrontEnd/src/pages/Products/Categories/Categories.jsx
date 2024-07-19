// importing local components
import ShopByCategories from './components/ShopByCategories'
import CategoriesInfo from './components/CategoriesInfo'

export default function Categories() {
  return (
    <div className="flex flex-col gap-10 py-20 px-8">
      <ShopByCategories />
      <CategoriesInfo />
    </div>
  )
}