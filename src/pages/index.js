import React, { useEffect, useState } from "react";

const Index = () => {
  const [mydata, setData] = useState("Default Hello");

  useEffect(() => {
    console.log("UseEffect called");

    const fetchData = async () => {
      const response = await fetch(`/.netlify/functions/fauna`);
      const result = await response.json();
      setData(result);
      console.log("Data: " + JSON.stringify(result));
    };

    fetchData();
  }, []);
  return <div>{mydata.message}</div>;
};

export default Index;
