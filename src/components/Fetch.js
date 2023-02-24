import React, { useEffect, useState } from "react";

const Fetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      let api = await fetch(url);
      let res = await api.json();
      console.log(res);
      setData(res);
    }
    getData();
  }, []);

  return [data];
};

export default Fetch;
