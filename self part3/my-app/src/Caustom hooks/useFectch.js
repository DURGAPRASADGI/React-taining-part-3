import { useEffect, useState } from "react";
export const useFectch = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [url]);
  return data;
};
