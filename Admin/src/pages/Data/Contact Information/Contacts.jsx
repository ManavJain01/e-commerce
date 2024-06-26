// Importing React Icons
import { TbColumns3 } from "react-icons/tb";
import { IoFilterSharp } from "react-icons/io5";
import { MdDensityMedium } from "react-icons/md";
import { PiExport } from "react-icons/pi";

export default function Contacts() {
  // Sample Data
  const sampleData = [
    {
      name: "manav jain",
      age: "24",
      phoneNumber: "8269543305",
      email: "nit474011gwl@gmail.com",
      address: "city center",
      city: "gwalior",
      zipCode: "474011"
    },
    {
      name: "sunil jain",
      age: "50",
      phoneNumber: "9301100870",
      email: "gwsgsi@yahoo.co.in",
      address: "city center",
      city: "gwalior",
      zipCode: "474011"
    }
  ]

  return (
    <div>
      <span>
        <h1 className="text-4xl font-bold">CONTACTS</h1>
        <p className="text-green-600">List of Contacts for Future Reference</p>
      </span>

      {/* Table */}
      <div className="w-fit mt-10">
        {/* filter options */}
        <div className="flex gap-8">
          <span className="flex items-center gap-2">
            <TbColumns3 />
            COLUMNS
          </span>

          <span className="flex items-center gap-2">
            <IoFilterSharp />
            FILTERS
          </span>

          <span className="flex items-center gap-2">
            <MdDensityMedium />
            DENSITY
          </span>

          <span className="flex items-center gap-2">
            <PiExport />
            EXPORT
          </span>
        </div>

        {/* table structure */}
        <table className="border-2 border-blue-800">
          {/* First row */}
          <thead>
            <tr className="bg-blue-800">
              <td className="py-2 px-5"><input type="checkbox" /></td>
              <td className="px-2">ID</td>
              <td className="px-10">Register ID</td>
              <td className="px-10">Name</td>
              <td className="px-5">Age</td>
              <td className="px-8">Phone Number</td>
              <td className="px-10">Email</td>
              <td className="px-5">Address</td>
              <td className="px-5">City</td>
              <td className="px-5">Zip Code</td>
            </tr>
          </thead>
          {/* nth rows */}
          <tbody>
            {sampleData?.map((e, i) => {
              return(
                <tr key={i} className="border-b-[1px] border-gray-500 hover:opacity-60">
                  <td className="py-5 px-5"><input type="checkbox" /></td>
                  <td className="px-2">1</td>
                  <td className="px-2">12321</td>
                  <td className="px-10">{e?.name}</td>
                  <td className="px-5">{e?.age}</td>
                  <td className="px-8">{e?.phoneNumber}</td>
                  <td className="px-10">{e?.email}</td>
                  <td className="px-10">{e?.address}</td>
                  <td className="px-10">{e?.city}</td>
                  <td className="px-10">{e?.zipCode}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {/* last row */}
        <div className="px-8 py-1 bg-blue-800 flex gap-10 justify-end">
          <p>Rows per page: 100</p>
          <p>1-9 of 9</p>
          <p>{"<"}</p>
          <p>{">"}</p>
        </div>
      </div>
    </div>
  )
}