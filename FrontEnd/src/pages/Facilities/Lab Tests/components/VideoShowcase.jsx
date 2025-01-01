export default function VideoShowcase() {
  return (
    <div className="flex gap-20">
      {/* First Section */}
      <div className="flex flex-col gap-5 w-[40rem]">
        <h1 className="font-bold text-xl">Uncompromised Quality. Reliable Results. Always.</h1>

        <p>Spending hours in a queue at a diagnostic lab or a hospital is now a thing of the past. With Dismefa Medicos you can get your lab tests done from the comfort of your home. Our highly qualified phlebotomist will collect the samples at your preferred time. Watch this video to see steps taken by us to ensure quality and hygiene in sample collection. Book your next lab test with Dismefa Medicos at the lowest price guaranteed!</p>
      </div>
      
      {/* Second Section */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mK_oLz3T1Yg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}