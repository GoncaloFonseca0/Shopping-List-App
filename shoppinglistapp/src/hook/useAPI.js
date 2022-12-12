import { useEffect, useState } from "react";
const useAPI = () => {
  const [apiData, setApiData] = useState([]);

  const callAPI = () => {
    const baseUrl = "https://demo.grocy.info/api/objects/products";
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((data) => setApiData(data));

    fetch("https://demo.grocy.info/api/objects/products?limit=5")
      .then((res) => res.json())
      .then((data) => setApiData(data));
  };
  useEffect(() => {
    callAPI();
  }, []);

  return {
    apiData,
    callAPI,
  };
};

export default useAPI;
