import React from "react";
import Header from "./Header";
import Product from "./Product";

const products = [
  {
    id: 1,
    title: "foo",
    price: 5390000,
    image: "https://picsum.photos/id/103/400/250",
  },
  {
    id: 2,
    title: "bar",
    price: 720500,
    image: "https://picsum.photos/id/100/400/250",
  },
  {
    id: 3,
    title: "baz",
    price: 120000,
    image: "https://picsum.photos/id/101/400/250",
  },
  {
    id: 4,
    title: "dal",
    price: 700100,
    image: "https://picsum.photos/id/102/400/250",
  },
];

export default function ShoppingPage() {
  const productsElements = products.map(({ id, ...other }) => (
    <Product key={id} {...other} />
  ));
  return (
    <div>
      <Header />
      <main className="products">{productsElements}</main>
    </div>
  );
}
