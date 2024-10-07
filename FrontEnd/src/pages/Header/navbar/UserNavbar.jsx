// Importing React-Icons
import { FaUserAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

// Importing React Packages
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

// Importing React Redux
import { useSelector } from 'react-redux';

// Importing Custom Hook
import { useLogout } from "../../../hooks/useLogout";

export default function UserNavbar() {
  // redux
  const userStore = useSelector(state => state.user.user);

  // useLogout
  const { logout } = useLogout();

  // Static Object
  const items = [{
    id:1,
    name:"My Orders",
    link:"User/myOrders"
  },
  // {
  //   id:2,
  //   name:"Save For Later",
  //   link:"User/SavedForLater"
  // },
  {
    id:3,
    name:"My Refills",
    link:"User/myRefills"
  },{
    id:4,
    name:"Medical Records",
    link:"User/MedicalRecords"
  },{
    id:5,
    name:"My Profile",
    link:"User/profile"
  },{
    id:6,
    name:"Wallet",
    link:"User/Wallet"
  },{
    id:7,
    name:"Refer & Earn",
    link:"User/Refer&Earn"
  },{
    id:8,
    name:"Notifications"
  },{
    id:9,
    name:"Log Out",
    className:"hover:text-red-700",
    link:"Home",
    onClick: async () => {
      // setUserName(prevUsername => {return {...prevUsername, isLoggedIn: false}})
      await logout();
    }
  }]

  // useState
  const [userName, setUserName] = useState("User");

  // useEffect
  useEffect(() => {
    setUserName(userStore?.name?.split(' ')[0].length > 10 ? userStore?.name?.split(' ')[0].slice(0, 10) + ".." : userStore?.name?.split(' ')[0] || "User");
  }, [userStore]);

  return (
    <div className="group z-[999999] relative">
      <div className="flex items-center gap-1">
        <FaUserAlt className="size-5" />
        <span>{userName}</span>
        <FaAngleDown className="size-3" />
      </div>

      <div className="hidden group-hover:block absolute -right-20 top-6 w-56">
        <ul className="text-black bg-white font-bold flex flex-col gap-4 items-center py-3 rounded-md border-b-2 shadow-md shadow-gray-400">
          {items.map((e)=>(
            <li key={e.id} id={e.id}><Link to={e.link}><button onClick={e.onClick} className={`${e?.className} hover:text-green-700`}>{e.name}</button></Link></li>
          ))}
        </ul>
      </div>
    </div>
  )
};