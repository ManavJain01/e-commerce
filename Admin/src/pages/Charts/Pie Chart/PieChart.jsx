// Importing local files
import Pie from "./components/pie";

export default function PieChart() {

  return (
    <div className="h-lvh flex flex-col gap-10">
      <span>
        <h1 className="text-4xl font-bold">Pie Chart</h1>
        <p className="text-green-600">Simple Pie Chart</p>
      </span>

      <Pie />
    </div>
  )
}