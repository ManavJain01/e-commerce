// Importing React Icons
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiShieldCheckeredFill } from "react-icons/pi";
import { TfiUnlock } from "react-icons/tfi";

// Importing React Packages
import { useEffect, useState } from "react";

// Importing Custom Hooks
import { useClient } from "../../../hooks/useClient";
export default function Customers() {
  // Custom Data
  const { loading, error, getCustomers } = useClient();

  // useState
  const [customers, setCustomers] = useState([]);

  // useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getCustomers();
      setCustomers(response);
    }

    fetchUsers();
  }, []);
  
  return (
    <div>
      <span>
        <h1 className="text-4xl font-bold">Customers</h1>
        <p className="text-green-600">All Registered Customers</p>
      </span>

      {/* Table */}
      <div className="w-fit">
        <table className="mt-10 border-2 border-blue-800">
          {/* First row */}
          <thead>
            <tr className="bg-blue-800">
              <td className="py-2 px-5"><input type="checkbox" /></td>
              <td className="px-2">ID</td>
              <td className="whitespace-nowrap px-10">Name</td>
              <td className="px-5">Age</td>
              <td className="whitespace-nowrap px-8">Phone Number</td>
              <td className="whitespace-nowrap px-10">Email</td>
              <td className="px-5">Access Level</td>
              <td className="px-5">Operations</td>
            </tr>
          </thead>
          {/* nth rows */}
          <tbody>
            {customers?.map((e, i) => {
              return(
                <tr key={i} className="group border-b-[1px] border-gray-500">
                  <td className="group-hover:opacity-60 py-5 px-5"><input type="checkbox" /></td>
                  <td className="group-hover:opacity-60 px-2">{i+1}</td>
                  <td className="group-hover:opacity-60 whitespace-nowrap px-10">{e?.name || "User"}</td>
                  <td className="group-hover:opacity-60 px-5">{e?.age || "NaN"}</td>
                  <td className="group-hover:opacity-60 whitespace-nowrap px-8">{e?.phone || "NaN"}</td>
                  <td className="group-hover:opacity-60 whitespace-nowrap px-10">{e?.email || "NaN"}</td>
                  <td className="px-5">
                    {e?.access ===
                      "admin"? <button className="text-xl font-semibold bg-green-500 hover:bg-green-600 py-1 px-5 flex gap-3 items-center rounded-lg">
                        <MdOutlineAdminPanelSettings />
                        admin
                      </button> 
                      :e?.access ===
                        "manager"? <button className="text-xl font-semibold bg-green-500 hover:bg-green-600 py-1 px-5 flex gap-3 items-center rounded-lg">
                          <PiShieldCheckeredFill />
                          manager
                        </button>
                        :e?.access || "user" === 
                          "user"&& <button className="text-xl font-semibold bg-green-500 hover:bg-green-600 py-1 px-5 flex gap-3 items-center rounded-lg">
                            <TfiUnlock />
                            user
                          </button>
                    }
                  </td>
                  <td className="flex gap-5 px-5 pt-5">
                    <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 px-3 py-1 rounded-lg">View</button>
                    <button className="bg-red-500 hover:bg-red-600 active:bg-red-700 px-3 py-1 rounded-lg">Delete</button>
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