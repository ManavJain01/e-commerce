import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";

import { useState, useEffect } from 'react'
import { styled } from 'styled-components'

function CarouselTab({slides}){
  const [currIndex, setCurrIndex] = useState(0)

  let slideStyles
  let containerStyles

  if(slides[currIndex].url){
    slideStyles = {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${slides[currIndex].url})` 
    }

    containerStyles = {
      width: '800px',
      height: '400px',
      position: 'relative',
      margin: '0 auto',
    }
  }else{
    slideStyles = {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${slides[currIndex]})` 
    }

    containerStyles = {
      width: '400px',
      height: '400px',
      position: 'relative',
      margin: '0 auto',
    }
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
  }

  const dotStyles = {
    margin: '0 3px',
    marginTop: '-15px',
    cursor: 'pointer',
    fontSize: '20px'
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: 'black',
    zIndex: 1,
    cursor: 'pointer'
  }

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: 'black',
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

  // useEffect
  useEffect(() => {
    const lens = document.querySelector('#magnifier-lens');
    const product_img = document.querySelector('#img');
    const magnified_img = document.querySelector('#magnified-img');

    function magnify(product_img, magnified_img) {
      lens.addEventListener('mousemove', moveLens);
      product_img.addEventListener('mousemove', moveLens);
      lens.addEventListener('mouseout', leaveLens);
    }

    function moveLens(e) {
      let x, y, cx, cy;
      const product_img_rect = product_img.getBoundingClientRect();
      x = e.pageX - product_img_rect.left - lens.offsetWidth / 2;
      y = e.pageY - product_img_rect.top - lens.offsetHeight / 2;

      let max_xpos = product_img_rect.width - lens.offsetWidth;
      let max_ypos = product_img_rect.height - lens.offsetHeight;

      if (x > max_xpos) x = max_xpos;
      if (x < 0) x = 0;

      if (y > max_ypos) y = max_ypos;
      if (y < 0) y = 0;

      lens.style.cssText = `top: ${y}px; left: ${x}px`;

      cx = magnified_img.offsetWidth / lens.offsetWidth;
      cy = magnified_img.offsetHeight / lens.offsetHeight;

      magnified_img.style.cssText = `
        background: url(${slides[currIndex]})
        -${x * cx}px -${y * cy}px /
        ${product_img_rect.width * cx}px ${product_img_rect.height * cy}px
        no-repeat
      `;

      lens.classList.add("active");
      magnified_img.classList.add("active");
    }

    function leaveLens() {
      lens.classList.remove("active");
      magnified_img.classList.remove("active");
    }

    magnify(product_img, magnified_img);

    // Cleanup event listeners on unmount
    return () => {
      lens.removeEventListener('mousemove', moveLens);
      product_img.removeEventListener('mousemove', moveLens);
      lens.removeEventListener('mouseout', leaveLens);
    };
  }, [currIndex, slides]);
  
  return(
    <DIVSTYLES>
      <div id="img-container" style={containerStyles}>
        {Array.isArray(slides) && slides.length > 1
          &&
          <div>
            {/* Left arrow key functionality */}
            <div style={leftArrowStyles} onClick={goToPrevious} className="hover:opacity-65"><IoIosArrowDropleft /></div>
            {/* Right arrow key functionality */}
            <div style={rightArrowStyles} onClick={goToNext} className="hover:opacity-65"><IoIosArrowDropright /></div>
          </div>
        }
        {/* It is carousel container */}
        <div id="img" style={slideStyles}></div>
        
        {/* It is dots container */}
        {Array.isArray(slides) && slides.length > 1
          &&<div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>
                <FaRegCircle className={`size-2 rounded-full ${slideIndex == currIndex ? "bg-black" : "bg-white"}`} />
              </div>
            ))}
          </div>
        }

        <div
          id="magnifier-lens"
          className="absolute /top-10 /left-0 w-[150px] h-[100px] bg-orange-200 opacity-0 /opacity-50 border-2 border-orange-400 rounded-md"></div>
        <div
          id="magnified-img"
          className="absolute -top-0 -right-[550px] w-[500px] h-full bg-white opacity-0 border border-black shadow-md shadow-gray-400"></div>
      </div>
    </DIVSTYLES>
  )
}

export default CarouselTab;

const DIVSTYLES = styled.div`
  #magnifier-lens.active{
    opacity: .5;
  }

  #magnified-img{
    transform: scale(0.5);
    transition: opacity .5s, transform .5s;
  }

  #magnified-img.active{
    opacity: 1;
    transform: scale(1);
  }
`