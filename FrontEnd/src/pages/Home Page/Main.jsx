// importing local images
import step from './Images/3step.jpg'
import cod from './Images/cod.jpg'
import indiaCovered from './Images/india_covered.jpg'

// importing local components
import SearchInput from '../../components/Header/components/SearchInput'
import CarouselTab from './components/CarouselTab'
import ShopByCategories from '../Products/Categories/components/ShopByCategories'
import Messages from './components/Messages'

// Import React Packages
import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Importing services
import { fetchHealthArticle } from "../../service/service";

function Main(){
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchHealthArticle();
      setArticles(response);
    }

    fetchData();
  }, [])

  const slides = [{url : step},
    {url : cod},
    {url: indiaCovered}]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <>
      <div className="bg-blue-100 min-w-[100vw] min-h-[60vh] pb-32 flex flex-col gap-32">
        <SearchInput />

        <div className="flex flex-col gap-32 px-10">
          {/* <CarouselTab slides={slides} /> */}
          <Carousel
            // showDots={true}
            responsive={responsive}
          >
            <img src={step} alt="img" style={{ width: '100%', height: 'auto' }} />
            <img src={cod} alt="img" />
            <img src={indiaCovered} alt="img" />
          </Carousel>


          {/* Messages */}
          <Messages />

          {/* Shop By Category */}
          <ShopByCategories />

          {/* Health Articles */}
          <div className='flex flex-col gap-10'>
            <span className='font-bold text-3xl'>Health Articles</span>
            <Carousel responsive={responsive} className='rounded-md'>
              {articles?.map((e,i) => {
                return(
                  <a key={i} href={e?.url} className="bg-blue-200 h-full flex flex-col justify-between p-3 border-[1px] rounded-md">
                    <h1 className="font-semibold text-2xl">{e?.title}</h1>
                    {e?.author && <span className="text-end">By - {e?.author}</span>}
                  </a>
                )
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;