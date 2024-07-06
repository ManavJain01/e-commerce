// Importing React Packages
import { useOutletContext } from "react-router-dom";

export default function ProgressCircle({ progress = "0.75", size = "40" }) {
  // Variables
  const angle = progress * 360;

  // getting darkTheme state
  const [darkTheme] = useOutletContext();

  return (
    <div
      style={{
        background: `radial-gradient(${darkTheme ? "#1F2A40" : "#DEDEDE"} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #6870fa ${angle}deg 360deg),
            #4cceac`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}