import { styled } from "styled-components"
import { Link } from 'react-router-dom'

function UserNavbar({ userName, setUserName }){
  const items = [{
    id:1,
    name:"My Orders"
  },{
    id:2,
    name:"Save For Later",
    link:"SavedForLater"
  },{
    id:3,
    name:"My Refills"
  },{
    id:4,
    name:"Medical Records"
  },{
    id:5,
    name:"My Profile"
  },{
    id:6,
    name:"Wallet"
  },{
    id:7,
    name:"Refer & Earn",
    link:"Refer&Earn"
  },{
    id:8,
    name:"Notifications"
  },{
    id:9,
    name:"Log Out",
    link:"Home",
    onClick: () => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("name");
      setUserName(prevUsername => {return {...prevUsername, isLoggedIn: false}})
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