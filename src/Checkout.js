import { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Context } from "./App";
import Receipt from "./Receipt";
import "./checkout.css";

const Checkout = ({ addedItem }) => {
  const [formData, setformData] = useState({
    city: "",
    street: "",
    payment: "",
  });
  const [showreceipt, setShowReceipt] = useState(false);
  //   const [paymentData, setPaymentData] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    setShowReceipt(true);
    // const data = { city, street, payment };
    // payData(data);
  }
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setformData({ ...formData, [name]: value });
  }
  //   useEffect(() => {
  //     console.log(paymentData);
  //   }, [paymentData]);

  return (
    <div>
      <div>
        <h2>Check Out</h2>
      </div>
      <div className={showreceipt ? "withreceipt" : "withoutreceipt"}>
        <div className="sform">
          <form onSubmit={handleSubmit}>
            <h2>Please fill all fields</h2>
            <label for="city">City</label> <br />
            <input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <br />
            <label for="street">Street Address</label>
            <br />
            <input
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
            <br />
            <label>Payment Options</label>
            <select name="payment" onChange={handleChange}>
              <option value="cash on delivery">Cash on delivery</option>
              <option value="mpesa xpress">M-PESA Xpress</option>
              <option value="debit card">Debit card</option>
            </select>
            <br />
            <button type="submit">Done</button>
          </form>
        </div>
        {/* <Receipt /> */}
        <div>
          {showreceipt ? (
            <Receipt addedItem={addedItem} billing={formData} />
          ) : null}
        </div>
      </div>

      {/* <Routes>
        <Route path="/checkout/receipt" element={<Receipt />} />
      </Routes> */}
    </div>
  );
};

export default Checkout;
