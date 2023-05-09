import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPendig] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPendig(true);

      const res = await fetch(url);
      const json = await res.json();

      setIsPendig(false);
      setData(json);
    };

    fetchData();
  }, [url]);

  return { data, isPending };
};
