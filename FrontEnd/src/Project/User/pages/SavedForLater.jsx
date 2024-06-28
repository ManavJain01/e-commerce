import { useState } from "react";

import SavedItemsLogo from '../Images/emptyCart.png'

function SavedForLater(){
  const [isEmpty, setIsEmpty] = useState(true);

  return(
    <>
      <div className="m-8 py-10 text-gray-600 flex justify-between">
        <h1 className="text-3xl font-semibold">Saved for Later</h1>
        {isEmpty ? <div className="my-40 flex flex-col flex-1 justify-center items-center gap-3">
          <img src={SavedItemsLogo} className="object-contain w-28" />
          <h2>You haven't saved any items yet</h2>
          <span>Save Now,Buy Later</span>
        </div> 
        :<div>

        </div>}
      </div>
    </>
  )
}

export default SavedForLater;