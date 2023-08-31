const Checkout = () => {
  return (
    <div>
      <h2>Please fill all fields</h2>
      <form>
        <label for="city">City</label>
        <input id="city" value="" />
        <label for="street">Street Address</label>
        <input id="street" value="" />
        <label>Payment Options</label>
        <select>
          <option>Cash on delivery</option>
          <option>M-PESA Xpress</option>
          <option>Debit card</option>
        </select>
      </form>
    </div>
  );
};

export default Checkout;
