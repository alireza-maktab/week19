import React from "react";
import ShoppingCart from "./ShoppingCart";
import User from "./User";

export default function Header() {
  return (
    <header>
      {/* Left Side */}
      <div>
        <ShoppingCart count={3} />
      </div>
      {/* Right Side */}
      <div>
        <User username={"abbas_boz"} />
      </div>
    </header>
  );
}
