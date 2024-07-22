// Import React Icons
import { TiTick } from "react-icons/ti";

export default function Checkbox({name = "", checked = false, onChange, className, color}) {
  return (
    <div className={`relative flex gap-1 ${className}`}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="cursor-pointer"
      />
    
      <label htmlFor={name} className="cursor-pointer">
        <span className={`absolute top-[5px] left-0 bg-blue-400 w-[13px] h-[13px] rounded-sm bg-${color} ${checked ? "block" : "hidden"}`}>
          <TiTick className={`relative -top-[2px] -left-[1px] text-white`} />
        </span>
      
        {name && <span className={`${checked && color ? "text-"+color : "text-blue-400"}`}>{name}</span>}
      </label>
    </div>
  )
}