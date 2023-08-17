import React, { useEffect, useState } from "react";
import axios from "axios";
import PostData from "./components/PostData";
import RetrieveData from "./components/RetrieveData";

const baseURL = "https://makemyplanapp2.onrender.com/";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${baseURL}`).then((response) => {
      setData(response.data);
    });
  };

  return (
    <div className="container my-3">
      <PostData fetchData={fetchData} />
      <RetrieveData data={data} fetchData={fetchData} />
    </div>
  );
}

export default App;

