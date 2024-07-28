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
  const customer = useSelector(state => state.user.user)

  // UseState
  const [verifyBtn, setVerifyBtn] = useState(false);
  const [data, setData] = useState({
    address: "",
    age: "",
    email: "",
    gender: "",
    id: "",
    name: "",
    phone: "",
  })

  // UseEffect
  useEffect(() => {
    setData({
      address: customer?.address || "",
      age: customer?.age || "",
      email: customer?.email || "",
      gender: customer?.gender || "",
      id: customer.id || "",
      name: customer?.name || "",
      phone: customer.phone || "",
    });
  }, [])

  // Functions
  const verifyCheck = async (e) => {
    e.preventDefault();
    const btn = document.getElementById("verify");
    btn.textContent = "Verified"
    btn.style.color = "green"
  }

  const handleInputChange = async (e) => {
    const { name, value } = await e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="w-full py-20 pr-5 md:pr-20 flex flex-col gap-3">
      <p className="text-4xl font-semibold">Edit Profile</p>

      <form className="flex flex-col gap-10 p-8 border-2 border-gray-300 rounded-md shadow-md shadow-gray-500">
        {/* Name */}
        <InputWithMovingLabel label="Name" type="text" value={data?.name} name="name" onChange={(e) => handleInputChange(e)} required={true} />

        {/* Email and Phone Number */}
        <div className="relative flex gap-5 flex-wrap">
          <InputWithMovingLabel label="Email" type="email" value={data?.email} name="email" onChange={(e) => handleInputChange(e)} required={true} />
          <InputWithMovingLabel label="Mobile Number" type="text" value={data?.phone} name="phone" onChange={(e) => handleInputChange(e)} required={true} />
          <button id="verify" onClick={(e)=>verifyCheck(e)} className={`absolute top-12 left-1 text-red-500 duration-700 ${verifyBtn ? "block text-green-500" : "hidden"}`}>Verify Email</button>
        </div>

        {/* Age and Gender */}
        <div className="flex gap-5 flex-wrap items-center">
          <InputWithMovingLabel label="Age" type="text" value={data?.age} name="age" onChange={(e) => handleInputChange(e)} />
          <GenderCheckBox value={data?.gender} name="gender" onChange={(e) => handleInputChange(e)} />
        </div>

        {/* Address */}
        <InputWithMovingLabel label="Address 1" type="text" value={data?.address} name="address1" onChange={(e) => handleInputChange(e)} />
        <InputWithMovingLabel label="Address 2" type="text" value={data?.address} name="address2" onChange={(e) => handleInputChange(e)} placeholder="optional..." />

        <Button onClick={(e) => handleSave(e)} className="font-semibold text-[25px] text-white bg-green-600 py-2 px-8 ml-auto border-none">Save</Button>
      </form>
    </div>
  )
}