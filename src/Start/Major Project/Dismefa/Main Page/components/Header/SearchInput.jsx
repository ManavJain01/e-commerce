import './searchInput.css'
import InputBtn from "../InputBtn"

function SearchInput(e){
  return(
    <>
      <div id="wrapper" className="flex items-center">
        <InputBtn id={`header-input ${e.id} `} title="header-input" button="Search" placeholder="Search For medicines & wellness products..." />
      </div>
    </>
  )
}

export default SearchInput