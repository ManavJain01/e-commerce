import { Link } from 'react-router-dom'

import fb from '../../Images/fb.jpeg'
import insta from '../../Images/Instagram.jpeg'
import youtube from '../../Images/YouTube.jpeg'
import googleStoreLogo from '../../Images/googleStoreLogo.png'

import InputBtn from '../InputBtn'

function Footer(){
  return(
    <>
      <div className="bg-blue-100 w-fit min-h-[20vh] text-gray-500">
        <hr className="min-w-[100vw] h-1 bg-white" />
        <div className="flex flex-col text-center items-center lg:items-start lg:flex-row lg:justify-between gap-10 lg:gap-32 py-10 px-14">
          <ul className="flex flex-col gap-6 whitespace-nowrap">
            <li><h1 className="text-xl font-bold">Company</h1></li>
            <li>Health Article</li>
            <li><Link to="/Help">Need Help</Link></li>
            <li><Link to="/Help">FAQ</Link></li>
          </ul>

          <ul className="whitespace-nowrap flex flex-col gap-2">
            <li><h2 className="text-xl font-bold">Social</h2></li>
            <li>
              <section className="flex gap-5 py-5">
                <img src={fb} className="w-10 object-contain rounded-full" />
                <img src={youtube} className="w-10 object-contain rounded-xl" />
                <img src={insta} className="w-10 object-contain rounded-md" />
              </section>
            </li>
            <li>
              <section className="flex flex-col gap-6">
                <p className="text-xl font-bold">Legal</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Editorial Policy</p>
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
            <li><h4 className="text-xl font-bold">Download Disfema</h4></li>
            <li><p className="font-bold">Manage your health with ease Download Dismefa today!</p></li>
            <li><p>Get easy access to medicines, health information, and more. With our app, you'll never have to wait in line again. Download now and start taking control of your health.</p></li>
            <li><button><img src={googleStoreLogo} className="object-contain w-56" /></button></li>
            <li>
              <section>
                <p className="text-xl font-bold">Contact Us</p>
                <p>Our customer representative team is available 7 days a week from 9 am - 9 pm.</p>
                <section className="flex gap-5 font-semibold justify-between">
                  <p>support@dismefa.in</p>
                  <p>8269543305</p>
                </section>
              </section>
            </li>
          </ul>
        </div>
        <hr className="min-w-[100vw] h-1 bg-white" />
        <div className="py-5 px-14">
          <p>2024 - Dismefa | All rights reserveds</p>
        </div>
      </div>
    </>
  )
}

export default Footer;