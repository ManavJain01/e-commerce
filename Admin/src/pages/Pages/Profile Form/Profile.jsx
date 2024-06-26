export default function Profile() {
  return (
    <div>
      <span>
        <h1 className="text-4xl font-bold">CREATE USER</h1>
        <p className="text-green-600">Create a New User Profile</p>
      </span>

      <form action="" className="mt-10 flex flex-col gap-10">
        <section className="flex justify-between gap-5">
          <input type="text" placeholder="First Name" className="flex-1 bg-gray-900 py-2 px-8 rounded-md" />
          <input type="text" placeholder="Last Name" className="flex-1 bg-gray-900 py-2 px-8 rounded-md" />
        </section>

        <input type="text" placeholder="Email" className="bg-gray-900 py-2 px-8 rounded-md" />
        <input type="text" placeholder="Contact Number" className="bg-gray-900 py-2 px-8 rounded-md" />
        <input type="text" placeholder="Address 1" className="bg-gray-900 py-2 px-8 rounded-md" />
        <input type="text" placeholder="Address 2" className="bg-gray-900 py-2 px-8 rounded-md" />

        <button className="bg-green-500 w-fit ml-auto py-2 px-5 rounded-lg">CREATE NEW USER</button>
      </form>
    </div>
  )
}