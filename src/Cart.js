import React from "react";
import "./productlist.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
function Cart({ addedItem, changeAddedItem }) {
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    fetch(" http://localhost:8000/cartItems")
      .then((res) => res.json())
      .then((items) => changeAddedItem(items));
  }, [deleted]);

  //function to remove item

  function removeItem(id) {
    fetch(`http://localhost:8000/cartItems/${id}`, {
      method: "Delete",
    });
    setDeleted(!deleted);
  }

  return (
    <div>
      <h1>My Cart</h1>
      <div className="checkout">
        <Link to="/checkout">
          <button>Checkout </button>
        </Link>
      </div>
      <div className="products">
        {addedItem &&
          addedItem.map((data, index) => {
            // console.log(index);
            return (
              <div>
                <div key={index}>
                  <div className="innerprod">
                    <img src={data.product_full_image} />
                    <h3>{data.product_name}</h3>
                    <ul>
                      <li>Price: {data.unit_price}</li>
                    </ul>
                    <button onClick={() => removeItem(data.id)}>Remove</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Cart;
