// Importing React Icons
import { MdOutlineStarPurple500 } from "react-icons/md";

// Importing React Packages
import { useEffect, useState } from 'react'

// Importing React Redux
import { useSelector, useDispatch } from 'react-redux'

export default function Profile() {
  // redux
  const dispatch = useDispatch()
  const stateItems = useSelector(state => state.state.stateItems)

  // USeState
  const [user, setUser] = useState("")

  // UseEffect
  useEffect(() => {
    const temp = stateItems.filter(item => item.stateName == "userName")[0]
    setUser(temp);
    const input = document.getElementById('mobile')
    input.value = temp?.state.phone;
  }, [])

  return (
    <div className="w-full py-20 pr-5 md:pr-20 flex flex-col gap-3">
      <p className="text-4xl font-semibold">Edit Profile</p>

      <form action="" className="flex flex-col gap-10 p-8 border-2 border-gray-300 rounded-md shadow-md shadow-gray-500">
        {/* Name */}
        <label htmlFor="name" className="relative flex">
          <MdOutlineStarPurple500 className="relative -left-1 text-red-400 size-3" />
          <input type="text" id="name" className="peer text-2xl w-full px-5 py-2 border-2 border-blue-400 focus:border-green-400 rounded-md outline-none" />
          <span className="absolute top-3 left-4 peer-focus:-top-4 peer-focus:left-2 duration-1000 bg-white text-blue-500 peer-focus:text-green-500 px-1 rounded-lg">Name</span>
        </label>

        {/* Email and Phone Number */}
        <div className="flex gap-5 flex-wrap">
          <label htmlFor="email" className="flex-1 flex relative">
            <MdOutlineStarPurple500 className="relative -left-1 text-red-400 size-3" />
            <input type="text" id="email" className="peer text-2xl w-full px-5 py-2 border-2 border-blue-400 focus:border-green-400 rounded-md outline-none" />
            <span className="absolute top-3 left-4 peer-focus:-top-4 peer-focus:left-2 duration-1000 bg-white text-blue-500 peer-focus:text-green-500 px-1 rounded-lg">Email</span>
          </label>

          <label htmlFor="mobile" className="relative flex-1 flex">
            <MdOutlineStarPurple500 className="relative -left-1 text-red-400 size-3" />
            <input type="text" id="mobile" className="peer text-2xl w-full px-5 py-2 border-2 border-blue-400 focus:border-green-400 rounded-md outline-none" />
            <span className="absolute top-3 left-4 peer-focus:-top-4 peer-focus:left-2 duration-1000 bg-white text-blue-500 peer-focus:text-green-500 px-1 rounded-lg">Mobile Number</span>
          </label>
        </div>

        {/* Age and Gender */}
        <div className="flex gap-5 flex-wrap items-center">
          <label htmlFor="age" className="flex-1 relative">
            <input type="text" id="age" className="peer text-2xl w-full px-5 py-2 border-2 border-blue-400 focus:border-green-400 rounded-md outline-none" />
            <span className="absolute top-3 left-4 peer-focus:-top-4 peer-focus:left-2 duration-1000 bg-white text-blue-500 peer-focus:text-green-500 px-1 rounded-lg">Age</span>
          </label>

          <div className="flex-1 text-blue-500">
            <p className="text-lg">Gender</p>
            <div className="flex gap-10">
              <div className="relative flex items-center gap-2">
                <input type="checkbox" />
                <span>Male</span>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Female</span>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Other</span>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <label htmlFor="address" className="relative">
          <input type="text" id="address" className="peer text-2xl w-full px-5 py-2 border-2 border-blue-400 focus:border-green-400 rounded-md outline-none" />
          <span className="absolute top-3 left-4 peer-focus:-top-4 peer-focus:left-2 duration-1000 bg-white text-blue-500 peer-focus:text-green-500 px-1 rounded-lg">Address</span>
        </label>

        <button className="text-2xl font-semibold text-white bg-green-600 w-fit px-8 py-2 ml-auto rounded-md">Save</button>
      </form>
    </div>
  )
}