import InputBtn from './InputBtn'

function Header(){
  return(
    <>
      <div className="w-[100vw] min-h-[20vh] py-10 px-14 flex justify-between">
        <h1>Dismefa Medicose</h1>
        <InputBtn title="header-input" button="Search" placeholder="Search For medicines & wellness products..." />
        <div>
          <ul className="flex gap-5">
            <li><p>Login | Signup</p></li>
            <li><p>Cart</p></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header