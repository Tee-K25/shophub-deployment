import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./App";
const Checkout = ({ payData }) => {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [payment, setPayment] = useState("Cash on delivery");
  //   const [paymentData, setPaymentData] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    const data = { city, street, payment };
    payData(data);
  }
  //   useEffect(() => {
  //     console.log(paymentData);
  //   }, [paymentData]);

  return (
    <div>
      <h2>Please fill all fields</h2>
      <form onSubmit={handleSubmit}>
        <label for="city">City</label>
        <input
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label for="street">Street Address</label>
        <input
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <label>Payment Options</label>
        <select onChange={(e) => setPayment(e.target.value)}>
          <option value="cash on delivery">Cash on delivery</option>
          <option value="mpesa xpress">M-PESA Xpress</option>
          <option value="debit card">Debit card</option>
        </select>
        <button>
          <Link to="/receipt">Done</Link>
        </button>
      </form>
    </div>
  );
};

export default Checkout;
