import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantsList, setPlantsList] = useState([])
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(data => setPlantsList(data))
  }, [])

  function handleNewList(newObj) {
    const updatedList = [...plantsList, newObj]
    setPlantsList(updatedList)
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={handleNewList} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plantsList={plantsList} search={search} />
    </main>
  );
}

export default PlantPage;
