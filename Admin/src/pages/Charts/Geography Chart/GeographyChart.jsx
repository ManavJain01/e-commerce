// Importing local files
import Geography from "./components/Geography";

export default function GeographyChart() {
  return (
    <div className="h-lvh flex flex-col gap-10">
      <span>
        <h1 className="text-4xl font-bold">Geography Chart</h1>
        <p className="text-green-600">Simple Geography Chart</p>
      </span>

      <Geography />
    </div>
  )
}