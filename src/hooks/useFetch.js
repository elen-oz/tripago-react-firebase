import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPendig] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPendig(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setIsPendig(false);
        setData(json);
        setError(null);
      } catch (err) {
        setIsPendig(false);
        setError('Could not fetch the data');
        console.log(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending };
};
