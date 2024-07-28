// Importing React Packages
import { styled } from "styled-components"
import { Link } from 'react-router-dom'

// Importing Custom Hook
import { useLogout } from "../../../hooks/useLogout"

function UserNavbar({ userName, setUserName }){
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
    link:"Home",
    onClick: async () => {
      setUserName(prevUsername => {return {...prevUsername, isLoggedIn: false}})
      await logout();
    }
  }]

  return(
    <>
      <div className="h-full w-56 bg-white z-50 py-3 rounded-md border-b-2 shadow-md shadow-gray-400">
        <ItemsStyle>
          <ul className="text-black font-bold flex flex-col gap-4 items-center">
            {items.map((e)=>(
              <li key={e.id} id={e.id}><Link to={e.link}><button onClick={e.onClick} className="hover:text-green-700">{e.name}</button></Link></li>
            ))}
            {/* <li><button className="text-gray-400 hover:text-green-700">Log Out</button></li> */}
          </ul>
        </ItemsStyle>
      </div>
    </>
  )
}

export default UserNavbar;

const ItemsStyle = styled.ul`
  li:nth-child(9){
    color:gray;
  }
`