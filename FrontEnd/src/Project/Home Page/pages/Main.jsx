// importing local images
import step from '../Images/3step.jpg'
import cod from '../Images/cod.jpg'
import indiaCovered from '../Images/india_covered.jpg'

// importing local components
import SearchInput from '../../Header-Footer/components/Header/SearchInput'
import CarouselTab from '../components/CarouselTab'
import ShopByCategories from '../../Categories/components/ShopByCategories'


function Main(){
  const slides = [{url : step},
    {url : cod},
    {url: indiaCovered}]

  return(
    <>
      <div className="bg-blue-100 min-w-[100vw] min-h-[60vh] pb-32 flex flex-col gap-32">
        <SearchInput />
        <CarouselTab slides={slides} />
        <div className="m-10">
          <ShopByCategories />
        </div>
      </div>

    </>
  )
}

export default Main;