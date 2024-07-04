//  Importing React Packages
import { useOutletContext } from "react-router-dom";

// Importing local files
import Card from "./Card";

export default function FAQ() {
  // getting darkTheme state
  const [darkTheme] = useOutletContext();

  return (
    <div>
      <span>
        <h1 className="text-4xl font-bold">FAQ</h1>
        <p className="text-green-600">Frequently Asked Questions Page</p>
      </span>

      <Card darkTheme={darkTheme} />
    </div>
  )
}