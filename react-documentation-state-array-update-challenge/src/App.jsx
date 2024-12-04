import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    const increaseProducts = products.map((product) => {
      if (product.id === productId) {
        let newProduct = { ...product, count: product.count + 1 };
        return newProduct;
      } else {
        return product;
      }
    });
    setProducts(increaseProducts);
  }

  function handleDcreaseClick(productId) {
    const dcreaseProducts = products.map((product) => {
      if (product.id === productId) {
        let newProduct = { ...product, count: product.count - 1 };
        if (product.count > 0) {
          return newProduct;
        } else {
          return { ...product, count: product.count };
        }
      } else {
        return product;
      }
    });
    setProducts(dcreaseProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}>
            +
          </button>
          <button
            onClick={() => {
              handleDcreaseClick(product.id);
            }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
