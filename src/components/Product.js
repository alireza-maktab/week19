import React from "react";

const formatToCurrency = (amount) => {
  return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export default function Product(props) {
  const { title, price, image } = props;
  return (
    <div className="product">
      <div className="product-header">
        <h2 className="title">{title}</h2>
        <h3 className="price">{formatToCurrency(price)}</h3>
      </div>
      <img src={image} alt={title} />
      <button type="button">Add To Card</button>
    </div>
  );
}
