import rightArrow from '../../Images/rightArrow.png'


function Help(){
  const items = [{
    id: 1,
    name: "Medicine Orders"
  },{
    id: 2,
    name: "Delivery"
  },{
    id: 3,
    name: "Doctor Consultation"
  },{
    id: 4,
    name: "Payment"
  },{
    id: 5,
    name: "Returns"
  },{
    id: 6,
    name: "Referrals"
  }]

  return(
    <>
      <div className="m-8 flex flex-col justify-between xl:h-[35rem]">
        <section>
          <h1 className="text-red-700 font-semibold">How can we help you?</h1>
          <ul className="flex flex-col gap-6 my-6 whitespace-nowrap">
            {items.map((e) => (
              <li key={e.id} id={e.id} className="flex justify-between border-b border-gray-400">
                <button className="flex justify-between flex-1">
                  {e.name}
                  <img src={rightArrow} className="object-contain w-5" />
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-wrap justify-between items-center text-green-700">
          <h2>For Enquiries:</h2>
          <section className="flex flex-wrap gap-2 sm:gap-5">
            <p className="flex flex-col items-center">Call: +91-8269543305<span>(Between 9am-9pm)</span></p>
            <span>Email: support@dismefa.in</span>
          </section>
        </section>
      </div>
    </>
  )
}

export default Help;