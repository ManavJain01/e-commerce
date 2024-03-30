import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
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

  //For smaller screen size accordion appears
  function handleResizeDuringActive(){
    if(window.innerWidth > '1023') setScreenSize(true);
    else setScreenSize(false)
  }

  //For smaller screen size accordion appears
  const handleResizeDuringPageLoad = useEffect(()=>{
    if(window.innerWidth > '1023')  setScreenSize(true);
    else setScreenSize(false)
  },[])

  //For smaller screen size accordion appears
  window.addEventListener('resize', handleResizeDuringActive);

  //For smaller screen size accordion appears
  function enableAccordion1(){
    const links = document.getElementsByTagName('a');
    if(links[13].style.display == "flex"){
      links[13].style.display = "none";
      links[14].style.display = "none";
      links[15].style.display = "none";
    }else{
      links[13].style.display = "flex";
      links[14].style.display = "flex";
      links[15].style.display = "flex";
    }
  }

  //For smaller screen size accordion appears
  function enableAccordion2(){
    const logos = document.getElementById('social-logos');
    if(logos.childNodes[0].style.display == "flex"){
      logos.childNodes[0].style.display = "none";
      logos.childNodes[1].style.display = "none";
      logos.childNodes[2].style.display = "none";
    }else{
      logos.childNodes[0].style.display = "flex";
      logos.childNodes[1].style.display = "flex";
      logos.childNodes[2].style.display = "flex";
    }
  }

  //For smaller screen size accordion appears
  function enableAccordion3(){
    const links = document.getElementsByTagName('a');
    if(links[16].style.display == "flex"){
      links[16].style.display = "none";
      links[17].style.display = "none";
      links[18].style.display = "none";
      links[19].style.display = "none";
    }else{
      links[16].style.display = "flex";
      links[17].style.display = "flex";
      links[18].style.display = "flex";
      links[19].style.display = "flex";
    }
  }

  //For smaller screen size accordion appears
  function enableAccordion4(){
    const p = document.getElementById('contact');
    if(p.nextElementSibling.style.display == "flex"){
      p.nextElementSibling.style.display = "none";
      p.nextElementSibling.nextElementSibling.style.display = "none";
    }else{
      p.nextElementSibling.style.display = "flex";
      p.nextElementSibling.nextElementSibling.style.display = "flex";
    }
  }


  return(
    <>
      <div className="bg-blue-100 w-fit min-h-[20vh] text-gray-500">
        <hr className="min-w-[100vw] h-1 bg-white" />
        <Styles>
          <div className="flex flex-col text-center items-center lg:items-start lg:flex-row lg:justify-between gap-10 lg:gap-32 py-10 px-14">
            <ul className="flex flex-col gap-6 whitespace-nowrap">
              <li>
                {screenSize ? <h1 className="text-xl font-bold">Company</h1> 
                :<button onClick={()=>enableAccordion1()}>
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
                :<button onClick={()=>enableAccordion2()}>
                  <h2 className="text-xl font-bold">Social</h2>
                  <img src={downArrow} className='object-contain w-6 mr-5' />
                </button>}
              </li>
              <li>
                <section id='social-logos' className="flex gap-5 py-5">
                  <img src={fb} className="w-10 object-contain rounded-full" />
                  <img src={youtube} className="w-10 object-contain rounded-xl" />
                  <img src={insta} className="w-10 object-contain rounded-md" />
                </section>
              </li>
              <li>
                <section className="flex flex-col gap-6">
                  <p className="text-xl font-bold">
                    {screenSize ? <span>Legal</span>
                    :<button onClick={()=>enableAccordion3()}>
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

            <ul className="flex flex-col gap-5">
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

            <ul className="flex flex-col gap-3">
              <li><h4 className="text-xl font-bold">Download Dismefa</h4></li>
              <li><p className="font-bold">Manage your health with ease Download Dismefa today!</p></li>
              <li><p>Get easy access to medicines, health information, and more. With our app, you'll never have to wait in line again. Download now and start taking control of your health.</p></li>
              <li><button><img src={googleStoreLogo} className="object-contain w-56" /></button></li>
              <li>
                <section className='flex flex-col gap-3'>
                  {screenSize ? <span className='text-xl font-bold'>Contact Us</span>
                  :<button id='contact' onClick={()=>enableAccordion4()} className="text-xl font-bold flex justify-between lg:block">
                    <span>Contact Us</span>
                    <img src={downArrow} className='object-contain w-6 mr-5' />
                  </button>}
                  
                  <p>Our customer representative team is available 7 days a week from 9 am - 9 pm.</p>
                  <p className="flex gap-5 font-semibold justify-between">
                    <span>support@dismefa.in</span>
                    <span>8269543305</span>
                  </p>
                </section>
              </li>
            </ul>
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
    div{
      align-items: start;
    }

    ul:first-child, li > section{
      padding-bottom: 10px;
      border-bottom: 2px solid white;
    }

    ul:nth-child(3), ul:nth-child(4){
      text-align: left;
    }

    p > button{
      width: 85vw;
      display: flex;
      justify-content: space-between;
    }

    li > button{
      display: flex;
      width: 85vw;
      justify-content: space-between;
    }

    li a, #contact ~ p, section > img{
      display: none;
      /* transition: 0.4s; */
    }
  }
`