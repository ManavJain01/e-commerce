// Importing React Icons
import { MdOutlineStarPurple500 } from "react-icons/md";

// Importing React Packages
import { useEffect, useState } from 'react'

// Importing React Redux
import { useSelector, useDispatch } from 'react-redux'

// Importing Local Components
import InputWithMovingLabel from "../../../utils/InputWithMovingLabel";
import GenderCheckBox from "../../../utils/GenderCheckBox";
import Button from '../../../components/common/Button'

export default function Profile() {
  // redux
  const dispatch = useDispatch()
  const stateItems = useSelector(state => state.state.stateItems)

  // USeState
  const [verifyBtn, setVerifyBtn] = useState(false);

  const verifyCheck = async (e) => {
    e.preventDefault();
    const btn = document.getElementById("verify");
    btn.textContent = "Verified"
    btn.style.color = "green"
  }

  return (
    <div className="w-full py-20 pr-5 md:pr-20 flex flex-col gap-3">
      <p className="text-4xl font-semibold">Edit Profile</p>

      <form className="flex flex-col gap-10 p-8 border-2 border-gray-300 rounded-md shadow-md shadow-gray-500">
        {/* Name */}
        <InputWithMovingLabel label="Name" type="text" required={true} />

        {/* Email and Phone Number */}
        <div className="relative flex gap-5 flex-wrap">
          <InputWithMovingLabel label="Email" type="email" required={true} />
          <InputWithMovingLabel label="Mobile Number" type="text" required={true} />
          <button id="verify" onClick={(e)=>verifyCheck(e)} className={`absolute top-12 left-1 text-red-500 duration-700 ${verifyBtn ? "block text-green-500" : "hidden"}`}>Verify Email</button>
        </div>

        {/* Age and Gender */}
        <div className="flex gap-5 flex-wrap items-center">
          <InputWithMovingLabel label="Age" type="text" />
          <GenderCheckBox />
        </div>

        {/* Address */}
        <InputWithMovingLabel label="Address 1" type="text" required={false} />
        <InputWithMovingLabel label="Address 2" type="text" required={false} placeholder="optional..." />

        <Button className="font-semibold text-[25px] text-white bg-green-600 py-2 px-8 ml-auto border-none">Save</Button>
      </form>
    </div>
  )
}