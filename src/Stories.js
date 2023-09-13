import React, { useEffect } from "react";

const Stories = () => {
  let API = "http://hn.algolia.com/api/v1/search?query=html";

  let fetchApiData = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Stories;
