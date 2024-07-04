export default function ProgressCircle({ progress = "0.75", size = "40" }) {
  // Variables
  const angle = progress * 360;

  return (
    <div
      style={{
        background: `radial-gradient(#1F2A40 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #6870fa ${angle}deg 360deg),
            #4cceac`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}