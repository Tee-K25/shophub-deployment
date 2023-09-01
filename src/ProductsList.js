import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./productlist.css";

function ProductList({ products, isSignedIn }) {
  //   console.log(products);
  const renderList = products.map((data, index) => {
    // console.log(index);
    return (
      <div key={index}>
        <div className="innerprod">
          <img src={data.product_full_image} />
          <h3>{data.product_name}</h3>
          <ul>
            <li>Price: {data.unit_price}</li>
          </ul>
          <Link to={`/${index}`} id="Link">
            {" "}
            <p className="moreInfo"> View Details...</p>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="products"> {renderList}</div>

      {/* <Link to="/select">sfsf</Link> */}
    </div>
  );
}

export default ProductList;
