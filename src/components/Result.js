import React, { useEffect, useState } from "react";

const Result = (props) => {
  let res = null;

  if (props.data.length > 0) {
    const result = props.data[0];
    res = (
      <>
        <div>
          <img src={result.thumbnail} />
        </div>
        <div>
          <h2>{result.title}</h2>
          <h4>{result.brand}</h4>
          <p>{result.description}</p>
          <p>{result.price}</p>
          <p>{result.discountPercentage}</p>
          <ul>
            {result.images.map((image, idx) => {
              return (
                <li key={idx}>
                  <img src={image} />
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
