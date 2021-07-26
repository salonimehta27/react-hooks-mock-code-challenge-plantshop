import React, { useState } from "react";

function NewPlantForm({ onAddNewPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })
  function handleAddPlant(e) {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        price: formData.price
      })
    }).then(resp => resp.json())
      .then(data => onAddNewPlant(data))

  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleAddPlant}>
        <input type="text" value={formData.name} onChange={handleChange} name="name" placeholder="Plant name" />
        <input type="text" value={formData.value} onChange={handleChange} name="image" placeholder="Image URL" />
        <input type="number" value={formData.price} onChange={handleChange} name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
