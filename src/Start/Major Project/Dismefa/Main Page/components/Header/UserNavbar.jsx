import { styled } from "styled-components"

const ItemsStyle = styled.ul`
  li:nth-child(9){
    color:gray;
  }
`

function UserNavbar({ setIsLogin }){
  const items = [{
    id:1,
    name:"My Orders"
  },{
    id:2,
    name:"Save For Later"
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
    name:"Refer & Earn"
  },{
    id:8,
    name:"Notifications"
  },{
    id:9,
    name:"Log Out",
    onClick:Logout
  }]

  function Logout(){
    setIsLogin(false);
  }

  return(
    <>
      <div className="h-full w-56 bg-white z-50 py-3 rounded-md border-b-2 shadow-md shadow-gray-400">
        <ItemsStyle>
          <ul className="text-black font-bold flex flex-col gap-4 items-center">
            {items.map((e)=>(
              <li key={e.id} id={e.id}><button onClick={e.onClick} className="hover:text-green-700">{e.name}</button></li>
            ))}
            {/* <li><button className="text-gray-400 hover:text-green-700">Log Out</button></li> */}
          </ul>
        </ItemsStyle>
      </div>
    </>
  )
}

export default UserNavbar;