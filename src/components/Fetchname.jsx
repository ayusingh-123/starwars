import React, { useState, useEffect } from "react";

const Fetchname = ({ url, target }) => {
  const [name, setName] = useState(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url && url.length > 0 && target === "people") {
          const response = await fetch(url[0]);
          const data = await response.json();
          setName(data.name);
        } else if (url != null && target === "species") {
          const response = await fetch(url);
          const data = await response.json();
          setName(data.name);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url, target]);

  console.log(name);
  return <div>{name}</div>;
};

export default Fetchname;
