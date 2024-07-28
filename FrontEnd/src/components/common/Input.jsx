export default function Input({children, type="text", value, id, placeholder, required, onChange, onBlur, className}) {
  return (
    <input
      type={type}
      value={value}
      id={id}
      placeholder={placeholder}
      required={required}
      onChange={(e) => onChange && onChange(e)}
      onBlur={(e) => onBlur && onBlur(e)}
      className={`w-fit py-1 px-5 rounded-md outline-none duration-700 placeholder:duration-700 ${className}`}
    />
  )
}