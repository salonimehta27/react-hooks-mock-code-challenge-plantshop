import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsList, search, onDelete, handlePriceChange }) {

  return (
    <ul className="cards">{plantsList.filter(plants => plants.name.toLowerCase().includes(search.toLowerCase()))
      .map(plant => <PlantCard
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        id={plant.id}
        onDelete={onDelete}
        onPriceChange={handlePriceChange}
      ></PlantCard>)}</ul>
  );
}

export default PlantList;
