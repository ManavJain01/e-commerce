// importing local images
import step from '../Images/3step.jpg'
import cod from '../Images/cod.jpg'
import indiaCovered from '../Images/india_covered.jpg'

// importing local components
import SearchInput from '../../Header-Footer/components/Header/SearchInput'
import CarouselTab from '../components/CarouselTab'
import ShopByCategories from '../../Categories/components/ShopByCategories'
import Messages from '../components/Messages'


function Main(){
  const slides = [{url : step},
    {url : cod},
    {url: indiaCovered}]

  return(
    <>
      <div className="bg-blue-100 min-w-[100vw] min-h-[60vh] pb-32 flex flex-col gap-32">
        <SearchInput />

        <div className="flex flex-col gap-32 px-10">
          <CarouselTab slides={slides} />

          {/* Messages */}
          <Messages />

          {/* Shop By Category */}
          <ShopByCategories />
        </div>
      </div>

    </>
  )
}

export default Main;