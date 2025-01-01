export default function FAQS() {
  // FAQS
  const QnsAns = [
    {
      qn: "When will I get an answer to my query? What happens if I don’t get a response?",
      ans: "If you opt for a free consult, then we make sure the doctor replies within 24 to 48 hours. In case of a paid consult, you will receive a reply within 2-4 business hours. However, if you do not get any response within the stipulated time, we will refund your money back into your account."
    },
    {
      qn: "Who are the consulting doctors?",
      ans: "All the doctors are registered medical practitioners. Along with qualifying degrees - experience, research and track-record of practice are taken into account before a doctor is credentialed with Dismefa Medicos and is given access to answer patient queries."
    },
    {
      qn: "Will the doctor be able to resolve my issue?",
      ans: "Our doctors will give you expert advice on your problem and help you identify next steps which may include further tests, medicine recommendation or lifestyle tips. Few cases require face-to-face examination and we do ask patients to share pictures or reports if they can, for a conclusive diagnosis."
    },
    {
      qn: "Is my consultation private with my doctor?",
      ans: "Privacy of data is one of the fundamental human rights and we at Dismefa Medicos understand that. All your medical history and online consultation with us are completely private and confidential. We are compliant with industry standards to ensure your consultations are securely stored."
    },
    {
      qn: "For how long is the consultation valid?",
      ans: "In the case of a paid consult, you can follow-up with your doctor for up to 3 days. In case you opt for a free consult, follow-up questions are valid for one day only."
    },
    {
      qn: "Do you have a refund policy?",
      ans: "We have a “take-it-easy” policy. If for any reason you’re not convinced with your online consultation, you can write to us at contact@dismefadoctors.com and we will review the consult with the doctor - seeking clarifications on your queries that were answered. 100% refund will be given in genuine cases."
    }
  ];

  return (
    <div className="flex flex-col items-center gap-20">
      <h1 className="font-semibold text-3xl text-gray-500">Frequently Asked Questions</h1>

      <div className="flex flex-col gap-5 max-w-[70rem]">{QnsAns.map((e, i) => {
        return(
          <div key={i} className="flex flex-col gap-3">
            <p className="font-semibold">{e?.qn}</p>
            <p className="text-gray-500">{e?.ans}</p>
            {!(i === QnsAns.length-1) && <hr className="border-gray-300" />}
          </div>
        )
      })}</div>
    </div>
  )
}