import React, { useState } from "react";

function PlantCard({ name, image, price, onDelete, id, onPriceChange }) {
  // console.log(price)
  const [inStock, setInStock] = useState(false)
  const [newPrice, setNewPrice] = useState(price)
  // console.log(newPrice)
  function handlePriceChange(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "Patch",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "price": newPrice
      })
    }).then(resp => resp.json())
      .then(data => setNewPrice(() => data + 1))
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {newPrice}
        <br></br>
        <button onClick={() => handlePriceChange(id)}>+</button>
        <button onClick={() => setNewPrice(newPrice - 1.0)}>-</button>
      </p>
      {inStock ? (
        <button onClick={() => setInStock(!inStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(!inStock)}>Out of Stock</button>
      )}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
