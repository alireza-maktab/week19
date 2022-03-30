import React from "react";
import ShoppingCardPNG from "../assets/shopping-cart.png";

export default function ShoppingCart({ count }) {
  return (
    <div className="shopping-card-btn">
      <img height="40" src={ShoppingCardPNG} alt="ShoppingCardIcon" />
      {count ? <span className="badge">{count}</span> : ""}
    </div>
  );
}
