import React, { useEffect, useState } from "react";

import resultClass from "./result.module.css";

const Result = (props) => {
  let res = null;

  if (props.data.length > 0) {
    const result = props.data[0];
    res = (
      <>
        <div className={resultClass.card}>
          <img className={resultClass.img} src={result.thumbnail} />
          <h2>{result.title}</h2>
          <h4>{result.brand}</h4>
          <p>{result.description}</p>
          <p>{result.price}$</p>
          <p>Discount: {result.discountPercentage}%</p>
        </div>
        <div>
          <ul className={resultClass.imagesContainer}>
            {result.images.map((image, idx) => {
              return (
                <li className={resultClass.images} key={idx}>
                  <img className={resultClass.img} src={image} />
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  } else {
    res = <p></p>;
  }

  return <div>{res}</div>;
};

export default Result;
