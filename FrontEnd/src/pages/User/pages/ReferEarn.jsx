import copyLogo from '../Images/copy.png'
import whatsapp from '../Images/whatsapp.png'

function ReferEarn(){
  return(
    <>
      <div className="flex flex-col py-20">
        <h1 className="font-semibold text-xl text-red-700 m-8">Refer & Earn</h1>
        <div className="flex flex-col items-center p-8 mx-10 rounded-t-md border">
          <button
           className={`flex items-center gap-4 text-xl font-semibold text-green-800 px-24 py-3 border-2 border-dashed border-gray-300 rounded-md
                      relative before:absolute before:content-['REFERRAL-CODE'] before:-top-3 before:text-gray-500 before:text-sm before:bg-white before:px-2`}>
            D I S 2 0 <img src={copyLogo} className='object-contain w-6' />
          </button>
          <span className="text-xs mt-2 text-gray-500">Click to copy the code</span>
        </div>
        <div className="flex justify-center p-8 mx-10 rounded-b-md border hover:opacity-80 active:opacity-90
                  relative before:absolute before:-top-2 before:content-['OR'] before:text-xs before:text-gray-500 before:bg-white before:px-2">
          <button className='flex gap-2 text-white bg-green-600 px-6 py-2 rounded-md'><img src={whatsapp} className='object-contain w-7' />Refer via WhatsApp</button>
        </div>
      </div>
    </>
  )
}

export default ReferEarn;