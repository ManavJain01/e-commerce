// Import React Icons
import { LuLoader } from "react-icons/lu";

export default function Skeleton() {
  return (
    <div className="flex flex-col mb-10">
      {/* <span><LuLoader className="text-green-700 size-32 mt-8 animate-spin" /></span> */}
      <div className="flex flex-col gap-10 animate-pulse">
        <div className="bg-blue-200 w-[60rem] h-[10rem] rounded-xl" />
        <div className="bg-blue-200 w-[60rem] h-[10rem] rounded-xl" />

        <div className="flex gap-10 animate-pulse">
          <div className="bg-blue-200 w-[30rem] h-[10rem] rounded-xl" />
          <div className="bg-blue-200 w-[28rem] h-[10rem] rounded-xl" />      
        </div>
      </div>
    </div>
  )
}