// Importing React Icons
import { FaRupeeSign } from "react-icons/fa";

export default function Wallet() {
  return (
    <div className="flex flex-col gap-10 py-40">
      <div className="font-semibold">
        <p>AVAILABLE BALANCE</p>
        <p className="text-4xl">Rs. 0.00</p>
      </div>

      <div className="text-white flex flex-wrap gap-5">
        <div className="bg-blue-500 flex items-center justify-between gap-5 w-[20rem] h-24 p-5 rounded-lg">
          <section className="flex gap-5 items-center">
            <span className="bg-blue-400 grid place-content-center w-10 h-10 rounded-full"><FaRupeeSign /></span>
            <span className="font-semibold tracking-widest text-sm">DM Cash</span>
          </section>
          <section className="flex flex-col items-center">
              <span className="text-lg">Rs. 0.00</span>
            <button className="font-semibold text-sm text-blue-900">How to use?</button>
          </section>
        </div>

        <div className="bg-blue-500 flex items-center justify-between gap-5 w-[20rem] h-24 p-5 rounded-lg">
          <section className="flex gap-5 items-center">
            <span className="bg-blue-400 grid place-content-center w-10 h-10 rounded-full"><FaRupeeSign /></span>
            <span className="font-semibold tracking-widest text-sm">DM Super Cash</span>
          </section>
          <section className="flex flex-col items-center">
            <span className="text-lg">Rs. 0.00</span>
            <button className="font-semibold text-sm text-blue-900">How to use?</button>
          </section>
        </div>
      </div>
    </div>
  )
}