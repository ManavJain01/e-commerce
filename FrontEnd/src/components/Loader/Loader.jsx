// Importing React Icons
import { BiLoaderCircle } from "react-icons/bi";

export default function Loader() {
  return (
    <div className="z-[999999] fixed top-0 left-0 text-5xl text-green-600 bg-white flex flex-col items-center justify-center gap-10 h-lvh w-lvw">
      <span>Welcome To Desmefa Medicos</span>
      <BiLoaderCircle className="size-32 animate-spin" />
      <span>Please Wait!!!</span>
    </div>
  )
}