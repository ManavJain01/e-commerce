// Importing React Packages
import { useEffect, useState } from "react";

// Importing Custom Hooks
import { useData } from "../../../hooks/useData";

export default function Invoices() {
  // Custom Data
  const { loading, error, getUsers } = useData();

  // useState
  const [users, setUsers] = useState([]);

  // useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <span>
        <h1 className="text-4xl font-bold">INVOICES</h1>
        <p className="text-green-600">List of Invoice Balances</p>
      </span>

      {/* Table */}
      <div className="w-fit mt-10">
        {/* table structure */}
        <table className="border-2 border-blue-800">
          {/* First row */}
          <thead>
            <tr className="bg-blue-800">
              <td className="py-2 px-5"><input type="checkbox" /></td>
              <td className="px-2">ID</td>
              <td className="whitespace-nowrap px-10">Name</td>
              <td className="whitespace-nowrap px-8">Phone Number</td>
              <td className="whitespace-nowrap px-10">Email</td>
              <td className="px-5">Cost</td>
              <td className="px-5">Date</td>
            </tr>
          </thead>

          {/* nth rows */}
          <tbody>
            {users?.map((e, i) => {
              return(
                <tr key={i} className="group border-b-[1px] border-gray-500">
                  <td className="py-5 px-5"><input type="checkbox" /></td>
                  <td className="group-hover:opacity-60 px-2">1</td>
                  <td className="group-hover:opacity-60 whitespace-nowrap px-10">{e?.name || "User"}</td>
                  <td className="group-hover:opacity-60 whitespace-nowrap px-8">{e?.phone || "NaN"}</td>
                  <td className="group-hover:opacity-60 whitespace-nowrap px-10">{e?.email || "NaN"}</td>
                  <td className="group-hover:opacity-60 px-5">{e?.cost || "0"}</td>
                  <td className="group-hover:opacity-60 px-5">{e?.date || "NaN"}</td>
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