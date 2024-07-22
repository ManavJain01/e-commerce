// Importing Icons from react-icons
import { CgSpinner } from "react-icons/cg";

// Import local files
import Loader from './Loader'

export default function LoadingScreen() {
  return (
    <div className="z-[99999] fixed top-0 left-0 w-full h-lvh flex flex-col justify-center items-center text-green-700 bg-[#f7f9fb] transition-all">
      <Loader className="size-48" />
      <span className="font-bold text-5xl">Dismefa Medicos</span>
    </div>
  )
}