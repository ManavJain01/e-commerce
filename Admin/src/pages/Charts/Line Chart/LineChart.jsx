// Importing local files
import Line from "./components/Line";

export default function LineChart() {
  return (
    <div className="h-lvh flex flex-col gap-10">
      <span>
        <h1 className="text-4xl font-bold">Line Chart</h1>
        <p className="text-green-600">Simple Line Chart</p>
      </span>

      <Line />
    </div>
  )
}