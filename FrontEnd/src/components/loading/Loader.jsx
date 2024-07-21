// Importing Icons from react-icons
import { CgSpinner } from "react-icons/cg";

export default function LoaderSymbol({className: style}) {
  return (
    // <CgSpinner className="size-48 animate-spin" />
    <CgSpinner className={`${style} animate-spin`} />
  )
}