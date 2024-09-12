// Importing React Packages
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Importing React Redux
import { useSelector } from 'react-redux'

// Importing Local Components
import Skeleton from './Profile/Skeleton'
import InputWithMovingLabel from "../../../utils/InputWithMovingLabel";
import GenderCheckBox from "../../../utils/GenderCheckBox";
import Button from '../../../components/common/Button'

// Importing Custom Hooks
import { useUserServices } from '../../../hooks/useUserServices'

export default function Profile() {
  // redux
  const customer = useSelector(state => state.user.user)

  // Custom Hooks
  const { loading, getCustomerUpdated } = useUserServices();

  // UseState
  const [verifyBtn, setVerifyBtn] = useState(false);
  const [data, setData] = useState({
    address1: "",
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
      address1: customer?.address || "",
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
    console.log("data:", data);
    
    await getCustomerUpdated(data);
  }

  if(loading) return(
    <div className="bg-gray-200 flex flex-col gap-2 justify-around w-full h-[25rem] px-10 rounded-lg animate-pulse">
      <div className="bg-gray-300 flex flex-col gap-10 w-full h-12 rounded-lg" />
      <div className="bg-gray-300 flex flex-col gap-10 w-full h-12 rounded-lg" />
      <div className="flex gap-10">
        <div className="bg-gray-300 flex flex-col gap-10 w-full h-12 rounded-lg" />
        <div className="bg-gray-300 flex flex-col gap-10 w-full h-12 rounded-lg" />
      </div>
      <div className="bg-gray-300 flex flex-col gap-10 w-full h-12 rounded-lg" />
    </div>
  )
  else return (
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

        <div className="flex gap-8">
          <Link to="/User/addresses" className="whitespace-nowrap text-lg text-white bg-blue-600 px-5 py-2 rounded-lg">Manage Address +</Link>
          <Link to="/User/patients" className="whitespace-nowrap text-lg text-white bg-blue-600 px-5 py-2 rounded-lg">Manage Patient +</Link>
          <Button onClick={(e) => handleSave(e)} className="font-semibold text-[25px] text-white bg-green-600 py-2 px-8 ml-auto border-none">Save</Button>
        </div>

      </form>
    </div>
  )
}