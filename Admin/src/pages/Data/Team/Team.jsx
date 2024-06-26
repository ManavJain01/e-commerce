// Importing React Icons
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiShieldCheckeredFill } from "react-icons/pi";
import { TfiUnlock } from "react-icons/tfi";


export default function Team() {
  // Sample Data
  const sampleData = [
    {
      name: "manav jain",
      age: "24",
      phoneNumber: "8269543305",
      email: "nit474011gwl@gmail.com",
      access: "manager"
    },
    {
      name: "sunil jain",
      age: "50",
      phoneNumber: "9301100870",
      email: "gwsgsi@yahoo.co.in",
      access: "admin"
    }
  ]

  return (
    <div>
      <span>
        <h1 className="text-4xl font-bold">TEAM</h1>
        <p className="text-green-600">Managing the Team Members</p>
      </span>

      {/* Table */}
      <div className="w-fit">
        <table className="mt-10 border-2 border-blue-800">
          {/* First row */}
          <thead>
            <tr className="bg-blue-800">
              <td className="py-2 px-5"><input type="checkbox" /></td>
              <td className="px-2">ID</td>
              <td className="px-10">Name</td>
              <td className="px-5">Age</td>
              <td className="px-8">Phone Number</td>
              <td className="px-10">Email</td>
              <td className="px-5">Access Level</td>
            </tr>
          </thead>
          {/* nth rows */}
          <tbody>
            {sampleData?.map((e, i) => {
              return(
                <tr key={i} className="border-b-[1px] border-gray-500 hover:opacity-60">
                  <td className="py-5 px-5"><input type="checkbox" /></td>
                  <td className="px-2">1</td>
                  <td className="px-10">{e?.name}</td>
                  <td className="px-5">{e?.age}</td>
                  <td className="px-8">{e?.phoneNumber}</td>
                  <td className="px-10">{e?.email}</td>
                  <td className="px-5">
                    {e?.access == 
                      "admin"? <div className="text-xl font-semibold bg-green-400 hover:bg-green-700 py-1 px-5 flex gap-3 items-center rounded-lg">
                        <MdOutlineAdminPanelSettings />
                        admin
                      </div> 
                      :e?.access ==
                        "manager"? <div className="text-xl font-semibold bg-green-400 hover:bg-green-700 py-1 px-5 flex gap-3 items-center rounded-lg">
                          <PiShieldCheckeredFill />
                          manager
                        </div>
                        :e?.access == 
                          "user"? <div className="text-xl font-semibold bg-green-400 hover:bg-green-700 py-1 px-5 flex gap-3 items-center rounded-lg">
                            <TfiUnlock />
                            user
                          </div>
                          : ""
                    }
                  </td>
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