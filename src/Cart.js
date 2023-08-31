import React from "react";
import "./productlist.css";

import { useState, useEffect } from "react";
function Cart() {
  const [addedItem, setAddedItem] = useState(null);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    fetch(" http://localhost:8000/cartItems")
      .then((res) => res.json())
      .then((items) => setAddedItem(items));
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
        <button>Checkout</button>
      </div>
      {addedItem &&
        addedItem.map((data, index) => {
          // console.log(index);
          return (
            <div key={index} className="products">
              <div className="innerprod">
                <h3>{data.product_name}</h3>
                <img src={data.product_full_image} />
                <ul>
                  <li>Price: {data.unit_price}</li>
                </ul>
                <button onClick={() => removeItem(data.id)}>Remove</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Cart;
