// Importing React-Icons
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import fb from './Images/fb.jpeg'
import insta from './Images/Instagram.jpeg'
import youtube from './Images/YouTube.jpeg'
import googleStoreLogo from './Images/googleStoreLogo.png'

import { Link } from 'react-router-dom'

import InputBtn from '../../components/Buttons/InputBtn'

function Footer(){
  // Variables
  const sections = [
    {
      category: "Company",
      subCategories: [
        {
          subCategory: "Consult A Doctor",
          link: "/consult-doctors"
        },
        {
          subCategory: "Book Lab Tests",
          link: "/lab-tests"
        },
        {
          subCategory: "Health Article",
          link: "/Company/Health-Article"
        },
        {
          subCategory: "Need Help",
          link: "/Company/help"
        },
        {
          subCategory: "FAQ",
          link: "/Company/help"
        },
      ]
    },
    {
      category1: "Social",
      img1: fb,
      img2: youtube,
      img3: insta,
      category2: "Legal",
      subCategories: [
        {
          subCategory: "Terms & Conditions",
          link: "/Legal/Terms&Conditions"
        },
        {
          subCategory: "Privacy Policy",
          link: "/Legal/Privacy-policy"
        },
        {
          subCategory: "Editorial Policy",
          link: "/Legal/Editorial-policy"
        },
        {
          subCategory: "Returns & Cancellations",
          link: "/Legal/Returns&Cancellation-policy"
        }
      ]
    },
    {
      category: "Subscribe",
      p1: "Claim your complimentary health and fitness tips subscription and stay updated on our newest promotions.",
      inputbtn: <InputBtn title="footer-subscribe" button="Subscribe" placeholder="Enter your email ID" />
    },
    {
      category: "Download Dismefa",
      h1: "Manage your health with ease Download Dismefa today!",
      h2: "Contact Us",
      p1: "Get easy access to medicines, health information, and more. With our app, you'll never have to wait in line again. Download now and start taking control of your health.",
      p2: "Our customer representative team is available 7 days a week from 9 am - 9 pm.",
      img: googleStoreLogo,
      email: "support@dismefa.in",
      phnNo: "+918269543305"
    },
  ]


  // Functions
  const getAccordion = (category) => {
    const subCategories = document.getElementById(category);
    if(subCategories.style.display == 'none') subCategories.style.display = 'flex';
    else subCategories.style.display = 'none';
  }

  //For smaller screen size accordion appears
  function handleResizeDuringActive(){
    const btn1 = document.getElementById(`btn-Company`);
    const btn2 = document.getElementById(`btn-Legal`);

    const subCategory1 = document.getElementById("Company");
    const subCategory2 = document.getElementById("Legal");
    if(window.innerWidth > '1023'){
      btn1.disabled = true
      btn2.disabled = true

      subCategory1.style.display = 'flex';
      subCategory2.style.display = 'flex';
    } else{
      btn1.disabled = false
      btn2.disabled = false

      subCategory1.style.display = 'none';
      subCategory2.style.display = 'none';
    }
  }

  //For smaller screen size accordion appears
  window.addEventListener('resize', handleResizeDuringActive);

  return(
    // <>
    //   <div className="relative bg-blue-100 w-fit min-h-[20vh] text-gray-500">
    //     {/* WhatsApp Icon */}
    //     <a target="_blank" href="https://wa.me/8269543305?text=Hello How can I help you?"><FaWhatsapp
    //       className="fixed bottom-10 right-10 z-50 size-12 bg-green-500 text-white p-1 rounded-[17px] shadow-md shadow-gray-400"
    //     /></a>
        
    //     <hr className="min-w-[100vw] h-1 bg-white" />    
    //     <Styles>
    //       <div className="flex flex-col-reverse text-center items-center lg:items-start lg:flex-row lg:justify-between gap-2 lg:gap-32 py-10 px-14">
    //         {/* Company Section */}
    //         <ul id="company-links" className="flex flex-col gap-6 whitespace-nowrap">
    //           <li>
    //             {screenSize ? <h1 className="text-xl font-bold">Company</h1> 
    //             :<button onClick={()=>enableAccordion1()} className="w-[85vw] flex justify-between">
    //               <h1 className="text-xl font-bold">Company</h1>
    //               <img src={downArrow} className='object-contain w-6 mr-5' />
    //             </button>}
    //           </li>
    //           <li><Link to="Company/Health-Article">Health Article</Link></li>
    //           <li><Link to="Company/Help">Need Help</Link></li>
    //           <li><Link to="Company/Help">FAQ</Link></li>
    //         </ul>

    //         {/* Social Section */}
    //         <ul className="whitespace-nowrap flex flex-col gap-2">
    //           <li>
    //             {screenSize ? <h2 className="text-xl font-bold">Social</h2>
    //             :<button onClick={()=>enableAccordion2()} className="w-[85vw] flex justify-between">
    //               <h2 className="text-xl font-bold">Social</h2>
    //               <img src={downArrow} className='object-contain w-6 mr-5' />
    //             </button>}
    //           </li>
    //           <li>
    //             <section id='social-logos' className="flex gap-5">
    //               <img src={fb} className="w-10 object-contain rounded-full" />
    //               <img src={youtube} className="w-10 object-contain rounded-xl" />
    //               <img src={insta} className="w-10 object-contain rounded-md" />
    //             </section>
    //           </li>
    //           {/* Legal Section */}
    //           <li>
    //             <section id="legal-links" className="flex flex-col gap-6">
    //               <p className="text-xl font-bold">
    //                 {screenSize ? <span>Legal</span>
    //                 :<button onClick={()=>enableAccordion3()} className="flex justify-between w-[85vw]">
    //                   <span>Legal</span>
    //                   <img src={downArrow} className='object-contain w-6 mr-5' />
    //                 </button>}
    //               </p>
    //               <p><Link to="Legal/Terms&Conditions">Terms & Conditions</Link></p>
    //               <p><Link to="Legal/Privacy-policy">Privacy Policy</Link></p>
    //               <p><Link to="Legal/Editorial-policy">Editorial Policy</Link></p>
    //               <p><Link to="Legal/Returns&Cancellation-policy">Returns & Cancellations</Link></p>
    //             </section>
    //           </li>
    //         </ul>

    //         {/* Subscribe */}
    //         <ul id="subscribe" className="text-left lg:text-center flex flex-col gap-5">
    //           <li><h3 className="text-xl font-bold">Subscribe</h3></li>
    //           <li><p>Claim your complimentary health and fitness tips subscription and stay updated on our newest promotions.</p></li>
    //           <li>
    //             {/* <section className="flex">
    //               <input placeholder="Enter your email ID" className="px-5 py-3 rounded-md" />
    //               <button className="bg-blue-600 text-white font-semibold text-lg px-5 py-3 rounded-md">Subscribe</button> */}
    //               <InputBtn title="footer-subscribe" button="Subscribe" placeholder="Enter your email ID" />
    //             {/* </section> */}
    //           </li>
    //         </ul>

    //         {/* Download */}
    //         <ul className="text-left lg:text-center flex flex-col gap-3">
    //           <li><h4 className="text-xl font-bold">Download Dismefa</h4></li>
    //           <li><p className="font-bold">Manage your health with ease Download Dismefa today!</p></li>
    //           <li><p>Get easy access to medicines, health information, and more. With our app, you'll never have to wait in line again. Download now and start taking control of your health.</p></li>
    //           <li><button><img src={googleStoreLogo} className="object-contain w-56" /></button></li>
    //           <li>
    //             <section id='contact-info' className='flex flex-col gap-3 w-[85vw] lg:w-fit'>
    //               {screenSize ? <span className='text-xl font-bold'>Contact Us</span>
    //               :<button onClick={()=>enableAccordion4()} className="text-xl font-bold flex justify-between lg:block">
    //                 <span>Contact Us</span>
    //                 <img src={downArrow} className='object-contain w-6 mr-5' />
    //               </button>}
                  
    //               <p>Our customer representative team is available 7 days a week from 9 am - 9 pm.</p>
    //               <section className="flex flex-col md:flex-row lg:flex-nowrap gap-5 font-semibold justify-between">
    //                 <a href="mailto:support@dismefa.in">support@dismefa.in</a>
    //                 <a href="tel:+918269543305">8269543305</a>
    //               </section>
    //             </section>
    //           </li></ul>
    //       </div>
    //     </Styles>
    //     <hr className="min-w-[100vw] h-1 bg-white" />
    //     <div className="py-5 px-14">
    //       <p>2024 - Dismefa | All rights reserveds</p>
    //     </div>
    //   </div>
    // </>

    <div className="relative bg-blue-100 min-h-[20vh] text-gray-500">
      {/* WhatsApp Icon */}
      <a target="_blank" href="https://wa.me/8269543305?text=Hello How can I help you?"><FaWhatsapp
        className="fixed bottom-10 right-10 z-50 size-12 bg-green-500 text-white p-1 rounded-[17px] shadow-md shadow-gray-400"
      /></a>
        
      <hr className="min-w-[100vw] h-1 bg-white" />   
    
      <div className="flex justify-between gap-3 lg:gap-20 flex-col lg:flex-row py-10 px-14">{sections?.map((e, i) => {
        return(
          <div key={i} className={`flex flex-col-reverse lg:flex-col gap-3 lg:gap-12`}>
            {/* Social Section */}
            {e?.category1
              &&<div className="flex flex-col gap-5">
                <span className="text-xl font-bold hidden lg:block">{e?.category1}</span>

                <section className="flex gap-6">
                  <img src={e?.img1} alt="img" className="w-10 object-contain rounded-full" />
                  <img src={e?.img2} alt="img" className="w-10 object-contain rounded-full" />
                  <img src={e?.img3} alt="img" className="w-10 object-contain rounded-full" />
                </section>
              </div>
            }

            <section className={`lg:max-w-[25rem] flex flex-col gap-3`}>
              {/* All Categories Headlines */}
              <button id={`btn-${e?.category || e?.category2}`} onClick={() => e?.subCategories && getAccordion(e?.category || e?.category2)} className={`text-xl font-bold flex items-center justify-between ${e?.subCategories ? "cursor-pointer lg:cursor-default" : "cursor-default"}`}>
                {e?.category || e?.category2}
                {e?.subCategories
                  &&<MdKeyboardArrowDown className="size-7 lg:hidden" />
                }
              </button>

              {/* All SubCategories */}
              {e?.subCategories
                &&<div id={e?.category || e?.category2} className="hidden lg:flex flex-col gap-6">{e?.subCategories?.map((f, i) => {
                  return(
                    <Link key={i} to={f?.link} className="w-fit whitespace-nowrap hover:text-[#312f2f] hover:border-b-[1px] hover:border-[#312f2f] duration-300">
                      {f?.subCategory}
                    </Link>
                  )
                })}</div>
              }

              {e?.subCategories
                &&<hr className="block lg:hidden border-white" />
              }

              <div className={`flex flex-col gap-3`}>
                {/* p1 */}
                {e?.p1 && e?.category == "Subscribe" && <p>{e?.p1}</p>}
                
                {/* inputbtn */}
                {e?.inputbtn}

                {/* Download Dismefa section */}
                <div className="flex flex-col">
                  {e?.h1 && <h1 className="font-bold">{e?.h1}</h1>}

                  {e?.p1 && e?.category == "Download Dismefa" && <p>{e?.p1}</p>}

                  {e?.img && <img src={e?.img} alt="img" className="object-contain w-56" />}
                </div>

                {/* Contact Us section */}
                <div className="flex flex-col gap-3">        
                  {e?.h2 && <h2 className='text-xl font-bold'>{e?.h2}</h2>}

                  {e?.p2 && <p>{e?.p2}</p>}
              
                  {e?.email
                    && <div className="flex justify-between">
                      <a href={`mailto:${e?.email}`}>{e?.email}</a>
                      <a href={`tel:${e?.phnNo}`}>{e?.phnNo}</a>
                    </div>
                  }
                </div>
              </div>
            </section>
          </div>
        )
      })}</div>

    <hr className="min-w-[100vw] h-1 bg-white" />

    {/* Last Section of Footer */}
    <div className="py-5 px-14">
      <p>2024 - Dismefa | All rights reserveds</p>
    </div>
    </div>
  )
}

export default Footer;