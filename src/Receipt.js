const Receipt = ({ addedItem, billing }) => {
  console.log(addedItem);
  console.log(billing);
  const pPrice = addedItem.map((data, index) => {
    return <p key={index}>{data.unit_price}</p>;
  });
  const pName = addedItem.map((data, index) => {
    return <p key={index}>{data.product_name}</p>;
  });
  const totalPrice = addedItem.reduce((accumulator, item) => {
    return accumulator + item.unit_price;
  }, 0);
  const arrival = Math.floor(Math.random() * 15) + 1;

  return (
    <div>
      <div className="receipt">
        <h4>Receipt</h4>
        <div>
          <p>{billing.city}</p>
          <p>{billing.street}</p>
          <p>{billing.payment}</p>
          <table border="1">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody id="table-body">
              <tr>
                <td>{pName}</td>
                <td>{pPrice}</td>
              </tr>
            </tbody>
          </table>
          <p>Total price: {totalPrice} </p>
          <p>
            Thank you for choosing us! We appreciate it. Your items are
            estimated to arrive within {arrival} days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
