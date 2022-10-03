import React, { useState, useEffect } from "react";
import '../styles/App.css';

const Loader = () => {
  <div id="loader">Loading...</div>;
};

const App = () => {
  const [getdata, setData] = useState("");
  const [getloading, setLoading] = useState(true);

  const makeURL = async (type) => {
    const getdata = await fetch(
      `https://www.boredapi.com/api/activity?type=${type}`
    );
    const response = await getdata.json();
    setLoading(false);
    setData(response.activity);
  };

  useEffect(() => {
    makeURL("education");
  }, []);

  const handleR = () => {
    setLoading(true);
    makeURL("recreational");
  };
  const handleE = () => {
    setLoading(true);
    makeURL("education");
  };
  return (
    <div id="activity">
      { getloading ? Loader() : getdata }
      <br />
      <button id="btn-recreation" onClick={handleR}>
        Recreational
      </button>
      <button id="btn-education" onClick={handleE}>
        Education
      </button>
    </div>
  );
};

export default App;
