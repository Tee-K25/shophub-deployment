const Receipt = ({ addedItem, payment }) => {
  console.log(addedItem);
  const rdetails = addedItem.map((data) => {
    return (
      <ul>
        <li>
          {data.product_name}: ksh{data.unit_price}
        </li>
      </ul>
    );
  });
  const totalPrice = addedItem.reduce((accumulator, item) => {
    return accumulator + item.unit_price;
  }, 0);

  return (
    <div>
      <div className="receipt" >
      <h4>Receipt</h4>
      <div>{rdetails}
       <p>Total price: {totalPrice} </p>
      </div></div>

    </div>
  );
};

export default Receipt;
