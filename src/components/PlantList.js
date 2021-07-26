import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsList, search }) {

  return (
    <ul className="cards">{plantsList.filter(plants => plants.name.toLowerCase().includes(search.toLowerCase()))
      .map(plant => <PlantCard
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        id={plant.id}
      ></PlantCard>)}</ul>
  );
}

export default PlantList;
