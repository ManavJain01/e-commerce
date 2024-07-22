export default function Button({children, onClick, className}) {
  return (
    <button onClick={()=> onClick && onClick()} className={`font-bold text-lg w-fit px-5 py-1 border-2 border-black rounded-md ${className}`}>
      {children}
    </button>
  )
}