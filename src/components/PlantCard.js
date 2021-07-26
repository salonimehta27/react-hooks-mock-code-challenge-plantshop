import React, { useState } from "react";

function PlantCard({ name, image, price, onDelete, id }) {
  const [inStock, setInStock] = useState(false)
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
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
