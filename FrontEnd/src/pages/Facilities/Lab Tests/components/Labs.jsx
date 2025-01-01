export default function Labs() {
  // Lab Options
  const labs = [
    {
      headline: "Radio Screening Package I",
      totalTests: "Includes 2 Tests",
      testNames: ["Electrocardiography at Center", "X-Ray Chest PA View"],
      deadline: "48 hours",
      amount: "480",
      discount: "40"
    },
    {
      headline: "Fever Package",
      totalTests: "Includes 45 Tests",
      testNames: ["ESR (Erythrocyte Sedimentation Rate)", "CBC (Complete Blood COunt)(21)", "Malarial Parasite Identification"],
      deadline: "24 hours",
      amount: "500",
      discount: "9"
    },
    {
      headline: "Diabetes Care Package",
      totalTests: "Includes 62 Tests",
      testNames: ["HbA1c (Hemoglobin A1c)", "CBC (Complete Blood COunt)(21)", "Serum Creatinine"],
      deadline: "24 hours",
      amount: "698",
      discount: "19"
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* First Section */}
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl text-gray-600">Popular health checkups</h1>

        {/* All Lab Options */}
        <section className="flex items-center gap-2">
          <button className="text-xs font-semibold text-white bg-gray-500 px-5 py-2 border border-gray-500 rounded-full">Popular Packages</button>
          <button className="text-xs font-semibold active:text-white active:bg-gray-500 px-5 py-2 border border-gray-500 rounded-full">Fever</button>
          <button className="text-xs font-semibold active:text-white active:bg-gray-500 px-5 py-2 border border-gray-500 rounded-full">Women Health</button>
          <button className="text-xs font-semibold active:text-white active:bg-gray-500 px-5 py-2 border border-gray-500 rounded-full">Fitness</button>
          <button className="text-xs font-semibold active:text-white active:bg-gray-500 px-5 py-2 border border-gray-500 rounded-full">Senior Citizen</button>
          <button className="text-xs font-semibold active:text-white active:bg-gray-500 px-5 py-2 border border-gray-500 rounded-full">Full Body Check Up</button>
          <button className="text-xs font-semibold active:text-white active:bg-gray-500 px-5 py-2 border border-gray-500 rounded-full">Pregnancy</button>
          <button className="text-xs font-semibold active:text-white active:bg-gray-500 px-5 py-2 border border-gray-500 rounded-full">Men Health</button>
          <button className="font-bold text-sm text-orange-600 ml-auto">VIEW ALL</button>
        </section>
      </div>

      {/* Second Section */}
      <div className="flex flex-wrap gap-10">{labs?.map((e, i) => {
        return(
          <div key={i} className="text-sm flex flex-col gap-5 justify-between h-[20rem] w-[18rem] px-5 py-3 border border-gray-500 rounded-md">
            <section className="relative">
              <h2 className="font-bold">{e?.headline}</h2>
              
              {/* Total Tests */}
              <p className="font-semibold text-xs text-gray-500">{e?.totalTests}</p>

              {/* Safe Tag */}
              <p className="absolute top-0 -right-5 font-bold text-xs bg-yellow-100 px-4 py-1">SAFE</p>
            </section>
            
            {/* All Test Names */}
            <ul className="font-semibold text-xs flex flex-col gap-2">
              {e?.testNames?.map((f, i) => {
                return(
                  <li key={i} className="text-gray-500">{f}</li>
                )
              })}

              <li>+ More</li>
            </ul>

            {/* Deadline */}
            <div className="flex flex-col">
              <p>Get report within {e?.deadline}</p>
              <p className="font-bold text-lg">₹ {e?.amount}</p>
              <p className="font-bold text-xs text-green-600 w-fit px-2 py-1 border border-dashed border-green-500">{e?.discount}% Off</p>
            </div>

            <button className="font-semibold text-white bg-orange-600 px-10 py-2 rounded-md">ADD TO  CART</button>
          </div>
        )
      })}</div>
    </div>
  )
}