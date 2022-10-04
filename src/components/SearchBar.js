/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

import searchBar from "./search-bar.module.css";

const SearchBar = (props) => {
  const [prod, setProd] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(async () => {
    const data = fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setAllProducts(json);
        return json;
      });

    let products = await data.then((res) => res);

    const res = await products.products.map((obj, idx) => {
      return {
        id: idx,
        name: obj.title,
      };
    });

    setProd(res);
  }, [setProd, setAllProducts]);

  const buttonClickHandler = (event) => {
    event.preventDefault();

    console.log(prod.products, keyword);

    const searchData =
      prod.products.length > 0 &&
      prod.products.filter((data) => {
        if (
          data.title.toLowerCase().includes(keyword) ||
          data.description.toLowerCase().includes(keyword)
        ) {
          return data;
        }
      });

    console.log(searchData);
  };

  const keywordHandler = (event) => {
    const value = event.target.value;
    setKeyword(value);
  };

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    setKeyword(string);
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    const filteredProduct = allProducts.products.filter((val) => {
      if (val.title.toLowerCase().includes(item.name.toLowerCase())) {
        return val;
      }
    });

    console.log(filteredProduct);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  return (
    <div className={searchBar.container}>
      <ReactSearchAutocomplete
        items={prod}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        inputSearchString={keyword}
        autoFocus
        // formatResult={formatResult}
      />
    </div>
  );
};

export default SearchBar;
