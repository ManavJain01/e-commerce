export default function Invoices() {
  // Sample Data
  const sampleData = [
    {
      name: "manav jain",
      phoneNumber: "8269543305",
      email: "nit474011gwl@gmail.com",
      cost: "rs.3000",
      date: "11-10-23"
    },
    {
      name: "sunil jain",
      phoneNumber: "9301100870",
      email: "gwsgsi@yahoo.co.in",
      cost: "rs.2000",
      date: "10-02-24"
    }
  ]

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
          <tr className="bg-blue-800">
            <td className="py-2 px-5"><input type="checkbox" /></td>
            <td className="px-2">ID</td>
            <td className="px-10">Name</td>
            <td className="px-8">Phone Number</td>
            <td className="px-10">Email</td>
            <td className="px-5">Cost</td>
            <td className="px-5">Date</td>
          </tr>
          {/* nth rows */}
          {sampleData?.map((e, i) => {
            return(
              <tr key={i} className="border-b-[1px] border-gray-500 hover:opacity-60">
                <td className="py-5 px-5"><input type="checkbox" /></td>
                <td className="px-2">1</td>
                <td className="px-10">{e?.name}</td>
                <td className="px-8">{e?.phoneNumber}</td>
                <td className="px-10">{e?.email}</td>
                <td className="px-5">{e?.cost}</td>
                <td className="px-5">{e?.date}</td>
              </tr>
            )
          })}
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