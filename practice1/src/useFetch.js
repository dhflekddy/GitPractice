import { useEffect, useState } from "react";

const useFetch = (baseUrl) => {
  const [data, setData] = useState(null);

  const fetchUrl = (info) => {
    fetch(baseUrl + "/" + info)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl("users");
  }, []);
  return {data, fetchUrl};
};
export default useFetch;
