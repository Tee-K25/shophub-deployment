import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router";
import "./selectproduct.css";
import { Link } from "react-router-dom";


function SelectedProduct({ products, isSignedIn, isLoggedIn }) {
  const { index } = useParams();
  // console.log(products);
  const select = products[index];
  console.log(select);
  const { pathname } = useLocation();
  console.log(pathname);
  const path = pathname;

  //function to add item to cart
  function addItem() {
    fetch(" http://localhost:8000/cartItems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(select),
    }).then((res) => console.log(res));
  }

  return (
    <div>
      <div className="selectprod">
        {select ? (
          <div>
            {" "}
            <div className="image">
              <h3>{select["product_name"]}</h3>
              <img src={select["product_full_image"]} />
            </div>
            <div className="details">
              <ul>
                <li>
                  <p>Description: {select["product_description"]}</p>
                </li>
                <li>Ranking: {select["ranking"]}</li>
                <li>Price: {select["unit_price"]}</li>
              </ul>
              {isLoggedIn ? (
                <Link to="/cart/">
                  <button onClick={addItem}>Add to cart</button>
                </Link>
              ) : (
                <Link to="/logIn">
                  <button>Add to cart</button>
                </Link>
              )}
            </div>
          </div>
        ) : null}
      </div>
      {/* <div> */}

      {/* {isLoggedIn ? <Cart /> : <p>please log in</p>} */}
      {/* </div> */}
    </div>
  );
}

export default SelectedProduct;
