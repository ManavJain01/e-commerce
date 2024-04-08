import SearchInput from '../../Main Page/components/Header/SearchInput'
import CarouselTab from './CarouselTab'

function Main(){
  return(
    <>
      <div className="bg-blue-100 min-w-[100vw] min-h-[60vh] pb-32 flex flex-col gap-32">
        <SearchInput />
        <CarouselTab />
      </div>

    </>
  )
}

export default Main;