export default function PageHeader() {
  return (
    <div className="flex justify-end gap-5">
      {/* Right Section */}
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-2xl">Lab Test From The Comfort Of Your Home</h1>
        <p>Trusted by 40 Lakhs+ satisfied customers | 1 Crore+ lab tests booked</p>

        <div className="text-sm flex items-center gap-5 w-[40rem]">
          {/* Hygienic */}
          <section className="flex flex-col items-center gap-3">
            <img src="https://onemg.gumlet.io/Safe_38x38_labs_oe5ieq.png?format=auto" alt="security" className="size-10" />
            <p className="text-center">100% Safe & Hygienic</p>
          </section>

          {/* Delivery */}
          <section className="flex flex-col items-center gap-3">
            <img src="https://onemg.gumlet.io/new_color_images/Lab_delivery_2x.png?format=auto" alt="delivery" className="size-10" />
            <p className="text-center">Home Sample Pick Up</p>
          </section>

          {/* Reports */}
          <section className="flex flex-col items-center gap-3">
            <img src="https://onemg.gumlet.io/new_color_images/Lab_online_report_2x.png?format=auto" alt="reports" className="size-10" />
            <p className="text-center">View Reports Online</p>
          </section>

          {/* Consultation */}
          <section className="flex flex-col items-center gap-3">
            <img src="https://onemg.gumlet.io/new_color_images/Lab_doctor_2x.png?format=auto" alt="consultation" className="size-10" />
            <p className="text-center">Free Doctor Consultation</p>
          </section>

          {/* Best Prices */}
          <section className="flex flex-col items-center gap-3">
            <img src="https://onemg.gumlet.io/new_color_images/Lab_offer_2x.png?format=auto" alt="best prices" className="size-10" />
            <p className="text-center">Best Prices Guaranteed</p>
          </section>
        </div>

        <button className="font-semibold text-white bg-orange-600 w-fit py-2 px-10 rounded-md">VIEW POPULAR PACKAGES</button>
      </div>
    </div>
  )
}