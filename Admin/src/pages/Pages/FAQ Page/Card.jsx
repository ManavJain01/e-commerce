// Importing React Icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// Importing React Packages
import { useState } from "react"

export default function Card() {
  // UseStates
  const [showAns, setShowAns] = useState(false);

  return (
    <div onClick={() => setShowAns(!showAns)} className="bg-gray-900 mt-10 p-5 flex flex-col gap-5 rounded-md shadow-md shadow-gray-700 cursor-pointer">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-green-600">Question</p>
        
        {showAns
          ? <IoIosArrowUp />
          : <IoIosArrowDown />
        }

      </div>
      {showAns
        ? <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit inventore recusandae rem in error quos corrupti quam id! Quidem minus dignissimos, accusantium nobis soluta pariatur aspernatur expedita dolor nisi vero?</p>
        : ""
      }
    </div>
  )
}