import './searchInput.css'
import InputBtn from "../../Buttons/InputBtn"

function SearchInput(){
  return(
    <>
      <div id="wrapper" className="relative flex items-center">
        <div className="absolute left-0 top-36 w-full lg:px-28 xl:px-80">
          <InputBtn id="enable" title="header-input" button="Search" placeholder="Search For medicines & wellness products..." />
        </div>
      </div>
    </>
  )
}

export default SearchInput