import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import CharactersList from "./CharactersList";
import getDataFromApi from "../services/getDataFromApi";
//import PropTypes from "prop-types";
import Filters from "./Filters";
import logo from "../images/logo.png";
import CharacterDetail from "./CharacterDetail";
import "../stylesheet/App.css";

const AppCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("all");
  const [specie, setSpecie] = useState("all");

  // use Api data
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  // data filtering structure
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
      return specie === "all" ? true : character.specie === specie;
    })
    .filter((character) => {
      return gender === "all" ? true : character.gender === gender;
    });

  // character details

  const renderDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CharacterDetail character={selectCharacter} />;
  };

  return (
    <div className="Container">
      <Switch>
        <Route exact path="/">
          <header className="header">
            <img src={logo} alt="Logo Rick and Morty show" className="logo" />
            <h1 className="h1">Directorio con los Personajes de la Serie</h1>
          </header>
          <main className="Container">
            <Filters handleFilter={handleFilter} />
            <CharactersList characters={filterCharacters} />
          </main>
        </Route>
        <Route exact path="/character/:id" render={renderDetail} />
      </Switch>
    </div>
  );
};

export default AppCharacters;
