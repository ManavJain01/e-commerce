// Importing React Packages
import { useState } from 'react';

export const useLoading = () => {
  // useStates
  const [loading, setLoading] = useState(false);

  return { loading, setLoading }
}