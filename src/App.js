import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result";

import SearchBar from "./components/SearchBar";

function App() {
  const [searchData, setSearchData] = useState([]);

  const searchDataHandler = (res) => {
    setSearchData(res);
  };

  return (
    <div className="App">
      <SearchBar onSearchData={searchDataHandler} />
      <Result data={searchData} />
    </div>
  );
}

export default App;
