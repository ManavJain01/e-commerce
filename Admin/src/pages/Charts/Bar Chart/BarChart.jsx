// Importing local files
import Bar from "./components/Bar";

export default function BarChart() {
  return (
    <div className="h-lvh flex flex-col gap-10">
      <span>
        <h1 className="text-4xl font-bold">Bar Chart</h1>
        <p className="text-green-600">Simple Bar Chart</p>
      </span>

      <Bar />
    </div>
  )
}