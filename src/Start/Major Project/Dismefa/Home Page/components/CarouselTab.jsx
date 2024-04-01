import step from '../Images/3step.jpg'
import cod from '../Images/cod.jpg'
import indiaCovered from '../Images/india_covered.jpg'

import { IoIosArrowDropright } from "react-icons/io";
import { FiArrowLeftCircle } from "react-icons/fi";

import { useState } from 'react'

function CarouselTab(){
  const slides = [{url : step},
                  {url : cod},
                  {url: indiaCovered}]

  const [currIndex, setCurrIndex] = useState(0)
  
  const containerStyles = {
    width: '800px',
    height: '400px',
    position: 'relative',
    margin: '0 auto',
  }

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currIndex].url})` 
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
  }

  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px'
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  }

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  }

  const goToPrevious = () => {
    const isFirstSlide = currIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrIndex(slideIndex)
  }

  return(
    <div style={containerStyles}>
      {/* Left arrow key functionality */}
      <div style={leftArrowStyles} onClick={goToPrevious}><FiArrowLeftCircle /></div>
      {/* Right arrow key functionality */}
      <div style={rightArrowStyles} onClick={goToNext}><IoIosArrowDropright /></div>
      {/* It is carousel container */}
      <div style={slideStyles}></div>
      {/* It is dots container */}
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>
            <p className='text-red-600 relative before:absolute before:top-3 before:left-0 before:bg-red-700 before:content["hi"] before:w-2 before:h-2 before:rounded-full' >&#9900;</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarouselTab;