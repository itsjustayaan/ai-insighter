import React, { createContext, useState, useEffect } from "react";

// Correctly initialize your context with a default value. In this case, it could be `null` or an empty object depending on what you expect to be using as the initial state of your data.
const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/itsjustayaan/ai-insighter/db"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []); // The empty array ensures this effect runs only once after the initial render.

  // When providing a value to your context, you should directly pass the state variable `data`. There's no need to do an assignment (`data = data`) in this context.
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
