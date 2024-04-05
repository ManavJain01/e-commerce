import { Link } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'

import fb from '../../Images/fb.jpeg'
import insta from '../../Images/Instagram.jpeg'
import youtube from '../../Images/YouTube.jpeg'
import googleStoreLogo from '../../Images/googleStoreLogo.png'
import downArrow from '../../Images/downArrow.png'

import InputBtn from '../InputBtn'

function Footer(){

  //For smaller screen size accordion appears
  const [screenSize, setScreenSize] = useState(true);
  const [isFlex1, setIsFlex1] = useState("flex")
  const [isFlex2, setIsFlex2] = useState("flex")
  const [isFlex3, setIsFlex3] = useState("flex")
  const [isFlex4, setIsFlex4] = useState("flex")

  //For smaller screen size accordion appears
  function handleResizeDuringActive(){
    if(window.innerWidth > '1023') setScreenSize(true);
    else setScreenSize(false)
  }

  // For smaller screen size accordion appears
  const handleResizeDuringPageLoad = useMemo(()=>{
    if(window.innerWidth > '1023'){
      setScreenSize(true);
      // setIsFlex1("flex")
      // setIsFlex2("flex")
      // setIsFlex3("flex")
      // setIsFlex4("flex")
    }
    else{
      setScreenSize(false)
      // setIsFlex1("none")
      // setIsFlex2("none")
      // setIsFlex3("none")
      // setIsFlex4("none")
    }
  },[window.innerWidth])

  //For smaller screen size accordion appears
  window.addEventListener('resize', handleResizeDuringActive);

  //For smaller screen size accordion appears
  function enableAccordion1(){
    const ul = document.getElementById('company-links');
    if(ul.childNodes[1].style.display == "flex")  setIsFlex1("none");
    else  setIsFlex1("flex");
  
    ul.childNodes[1].style.display = isFlex1;
    ul.childNodes[2].style.display = isFlex1;
    ul.childNodes[3].style.display = isFlex1;
  }

  //For smaller screen size accordion appears
  function enableAccordion2(){
    const logos = document.getElementById('social-logos');
    if(logos.childNodes[0].style.display == "flex") setIsFlex2("none")
    else setIsFlex2("flex")

    logos.childNodes[0].style.display = isFlex2;
    logos.childNodes[1].style.display = isFlex2;
    logos.childNodes[2].style.display = isFlex2;
  }

  //For smaller screen size accordion appears
  function enableAccordion3(){
    const ul = document.getElementById('legal-links');
    if(ul.childNodes[1].style.display == "flex") setIsFlex3("none")
    else setIsFlex3("flex")

    ul.childNodes[1].style.display = isFlex3;
    ul.childNodes[2].style.display = isFlex3;
    ul.childNodes[3].style.display = isFlex3;
    ul.childNodes[4].style.display = isFlex3;
  }

  //For smaller screen size accordion appears
  function enableAccordion4(){
    const section = document.getElementById('contact-info');
    if(section.childNodes[1].style.display == "flex")  setIsFlex4("none")
    else  setIsFlex4("flex")

    section.childNodes[1].style.display = isFlex4;
    section.childNodes[2].style.display = isFlex4;
  }


  return(
    <>
      <div className="bg-blue-100 w-fit min-h-[20vh] text-gray-500">
        <hr className="min-w-[100vw] h-1 bg-white" />
        <Styles>
          <div className="flex flex-col-reverse text-center items-center lg:items-start lg:flex-row lg:justify-between gap-2 lg:gap-32 py-10 px-14">
            <ul id="company-links" className="flex flex-col gap-6 whitespace-nowrap">
              <li>
                {screenSize ? <h1 className="text-xl font-bold">Company</h1> 
                :<button onClick={()=>enableAccordion1()} className="w-[85vw] flex justify-between">
                  <h1 className="text-xl font-bold">Company</h1>
                  <img src={downArrow} className='object-contain w-6 mr-5' />
                </button>}
              </li>
              <li><Link to="Company/Health-Article">Health Article</Link></li>
              <li><Link to="Company/Help">Need Help</Link></li>
              <li><Link to="Company/Help">FAQ</Link></li>
            </ul>

            <ul className="whitespace-nowrap flex flex-col gap-2">
              <li>
                {screenSize ? <h2 className="text-xl font-bold">Social</h2>
                :<button onClick={()=>enableAccordion2()} className="w-[85vw] flex justify-between">
                  <h2 className="text-xl font-bold">Social</h2>
                  <img src={downArrow} className='object-contain w-6 mr-5' />
                </button>}
              </li>
              <li>
                <section id='social-logos' className="flex gap-5">
                  <img src={fb} className="w-10 object-contain rounded-full" />
                  <img src={youtube} className="w-10 object-contain rounded-xl" />
                  <img src={insta} className="w-10 object-contain rounded-md" />
                </section>
              </li>
              <li>
                <section id="legal-links" className="flex flex-col gap-6">
                  <p className="text-xl font-bold">
                    {screenSize ? <span>Legal</span>
                    :<button onClick={()=>enableAccordion3()} className="flex justify-between w-[85vw]">
                      <span>Legal</span>
                      <img src={downArrow} className='object-contain w-6 mr-5' />
                    </button>}
                  </p>
                  <p><Link to="Legal/Terms&Conditions">Terms & Conditions</Link></p>
                  <p><Link to="Legal/Privacy-policy">Privacy Policy</Link></p>
                  <p><Link to="Legal/Editorial-policy">Editorial Policy</Link></p>
                  <p><Link to="Legal/Returns&Cancellation-policy">Returns & Cancellations</Link></p>
                </section>
              </li>
            </ul>

            <ul className="text-left lg:text-center flex flex-col gap-5">
              <li><h3 className="text-xl font-bold">Subscribe</h3></li>
              <li><p>Claim your complimentary health and fitness tips subscription and stay updated on our newest promotions.</p></li>
              <li>
                {/* <section className="flex">
                  <input placeholder="Enter your email ID" className="px-5 py-3 rounded-md" />
                  <button className="bg-blue-600 text-white font-semibold text-lg px-5 py-3 rounded-md">Subscribe</button> */}
                  <InputBtn title="footer-subscribe" button="Subscribe" placeholder="Enter your email ID" />
                {/* </section> */}
              </li>
            </ul>

            <ul className="text-left lg:text-center flex flex-col gap-3">
              <li><h4 className="text-xl font-bold">Download Dismefa</h4></li>
              <li><p className="font-bold">Manage your health with ease Download Dismefa today!</p></li>
              <li><p>Get easy access to medicines, health information, and more. With our app, you'll never have to wait in line again. Download now and start taking control of your health.</p></li>
              <li><button><img src={googleStoreLogo} className="object-contain w-56" /></button></li>
              <li>
                <section id='contact-info' className='flex flex-col gap-3 w-[85vw] lg:w-fit'>
                  {screenSize ? <span className='text-xl font-bold'>Contact Us</span>
                  :<button onClick={()=>enableAccordion4()} className="text-xl font-bold flex justify-between lg:block">
                    <span>Contact Us</span>
                    <img src={downArrow} className='object-contain w-6 mr-5' />
                  </button>}
                  
                  <p>Our customer representative team is available 7 days a week from 9 am - 9 pm.</p>
                  <p className="flex flex-col md:flex-row lg:flex-nowrap gap-5 font-semibold justify-between">
                    <span>support@dismefa.in</span>
                    <span>8269543305</span>
                  </p>
                </section>
              </li></ul>
          </div>
        </Styles>
        <hr className="min-w-[100vw] h-1 bg-white" />
        <div className="py-5 px-14">
          <p>2024 - Dismefa | All rights reserveds</p>
        </div>
      </div>
    </>
  )
}

export default Footer;

const Styles = styled.div`
  li a:hover{
    border-bottom:  2px solid #312f2f;
    color: #312f2f;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
  }

  @media screen and (max-width: 1023px) {
    ul:first-child, li > section{
      padding-bottom: 10px;
      border-bottom: 2px solid white;
    }
  }
`