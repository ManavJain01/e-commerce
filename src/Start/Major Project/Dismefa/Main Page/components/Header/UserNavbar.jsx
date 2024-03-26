function UserNavbar(){
  const items = ["My Orders", "Save For Later", "My Refills", "Medical Records", "My Profile", "Wallet", "Refer & Earn", "Notifications", "Log Out"]

  return(
    <>
      <div className="h-full w-56 bg-white z-50 py-3 rounded-md border-b-2 shadow-md shadow-gray-400">
        <ul className="text-black font-bold flex flex-col gap-4 items-center">
          {items.map((e)=>(
            <li id={e}><button className="hover:text-green-700">{e}</button></li>
          ))}
          {/* <li><button className="hover:text-green-700">My Orders</button></li>
          <li><button className="hover:text-green-700">Save For Later</button></li>
          <li><button className="hover:text-green-700">My Refills</button></li>
          <li><button className="hover:text-green-700">Medical Records</button></li>
          <li><button className="hover:text-green-700">My Profile</button></li>
          <li><button className="hover:text-green-700">Wallet</button></li>
          <li><button className="hover:text-green-700">Refer & Earn</button></li>
          <li><button className="hover:text-green-700">Notifications</button></li>
          <li><button className="text-gray-400 hover:text-green-700">Log Out</button></li> */}
        </ul>
      </div>
    </>
  )
}

export default UserNavbar;