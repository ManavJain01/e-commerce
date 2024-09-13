// Import React Packages
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function DataFromServer() {
  // useStates
  const [html, setHtml] = useState("");

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      const temp = await axios.get('http://localhost:5000/api/html');
      setHtml(temp.data);
    }

    fetchData();
  }, [])

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}