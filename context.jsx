import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://katb.in/lohatepujod/raw");
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          console.log(response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const filtered = data.cards.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <DataContext.Provider value={{ data: filteredData, handleSearch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
