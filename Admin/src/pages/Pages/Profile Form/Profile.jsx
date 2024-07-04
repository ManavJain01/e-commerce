// Importing React Packages
import { useOutletContext } from "react-router-dom";

export default function Profile() {
  // getting darkTheme state
  const [darkTheme] = useOutletContext();

  return (
    <div>
      <span>
        <h1 className="text-4xl font-bold">CREATE USER</h1>
        <p className="text-green-600">Create a New User Profile</p>
      </span>

      <form action="" className="mt-10 flex flex-col gap-10">
        <section className="flex justify-between gap-5">
          <input type="text" placeholder="First Name" className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4] text-gray-600"} flex-1 py-2 px-8 rounded-md outline-none`} />
          <input type="text" placeholder="Last Name" className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4] text-gray-600"} flex-1 py-2 px-8 rounded-md outline-none`} />
        </section>

        <input type="text" placeholder="Email" className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4] text-gray-600"} py-2 px-8 rounded-md outline-none`} />
        <input type="text" placeholder="Contact Number" className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4] text-gray-600"} py-2 px-8 rounded-md outline-none`} />
        <input type="text" placeholder="Address 1" className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4] text-gray-600"} py-2 px-8 rounded-md outline-none`} />
        <input type="text" placeholder="Address 2" className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4] text-gray-600"} py-2 px-8 rounded-md outline-none`} />

        <button className="text-white bg-green-600 w-fit ml-auto py-2 px-5 rounded-lg">CREATE NEW USER</button>
      </form>
    </div>
  )
}