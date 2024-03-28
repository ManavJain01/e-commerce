import './searchInput.css'
import InputBtn from "../InputBtn"

function SearchInput(){
  return(
    <>
      <div id="wrapper" className="flex items-center">
        <InputBtn id="enable" title="header-input" button="Search" placeholder="Search For medicines & wellness products..." />
      </div>
    </>
  )
}

export default SearchInput