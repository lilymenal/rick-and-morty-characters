//import React from "react";
import React, { useEffect, useState } from "react";
import CharactersList from "./CharactersList";
import getDataFromApi from "../services/getDataFromApi";
//import PropTypes from "prop-types";
import Filters from "./Filters";
import logo from "../images/logo.png";

//console.log(getDataFromApi());
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("all");
  const [specie, setSpecie] = useState("all");
  //const [species, setSpecies] = useState("");
  useEffect(() => {
    console.log(getDataFromApi());
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "specie") {
      setSpecie(inputChange.value);
    } else if (inputChange.key === "gender") {
      setGender(inputChange.value);
    }
  };
  const filterCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((character) => {
      /*if (gender === "all") {
        return true;
      } else {
        return character.gender === gender;
      }*/
      return specie === "all" ? true : character.specie === specie;
    })
    .filter((character) => {
      /*if (specie === "all") {
        return true;
      } else {
        return character.specie === specie;
      }*/
      return gender === "all" ? true : character.gender === gender;
    });
  return (
    <>
      <img src={logo} alt="Logo Rick and Morty show" className="logo" />
      <h1>Directorio de Personajes</h1>
      <Filters handleFilter={handleFilter} />
      <CharactersList characters={filterCharacters} />
    </>
  );
};
//
export default App;
