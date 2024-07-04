// Importing local files
import ProgressCircle from "./ProgressCircle";

export default function StatBox({ title, subtitle, icon, progress, increase }) {
  return (
    <div className="w-full my-[30px]">
      <div className="flex justify-between">
        <div>
          {icon}

          <div>{title}</div>
        </div>

        <div>
          <ProgressCircle progress={progress} />
        </div>
      </div>

      <div className="flex justify-between mt-1">
        <div>{subtitle}</div>
        <div>{increase}</div>
      </div>
    </div>
  )
}