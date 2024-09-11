// Importing React Icons
import { LuLoader } from "react-icons/lu";

export default function ShimmerEffect() {
  // Variables
  const cardQty = 8;

  return (
    <div className="flex gap-10 flex-wrap">
      {/* <span className="my-40"><LuLoader className="text-green-700 size-32 mx-auto animate-spin" /></span> */}
      {Array.from({ length: cardQty }).map((_, index) => (
        <div
          key={index}
          className="bg-slate-200 h-64 w-56 rounded-lg animate-pulse"
        />
      ))}
    </div>
  )
}