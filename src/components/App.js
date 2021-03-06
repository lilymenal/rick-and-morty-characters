import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/getDataFromApi";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import logo from "../images/logo.png";
import "../stylesheet/App.scss";

const AppCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("all");
  const [specie, setSpecie] = useState("all");
  const [userstatus, setStatus] = useState("all");

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
    } else if (inputChange.key === "userstatus") {
      setStatus(inputChange.value);
    }
  };

  const filterCharacters = characters
    .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    .filter((character) => {
      return character.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((character) => {
      return specie === "all" ? true : character.specie === specie;
    })
    .filter((character) => {
      return gender === "all" ? true : character.gender === gender;
    })
    .filter((character) => {
      return userstatus === "all" ? true : character.userstatus === userstatus;
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
    <div className="App__Container">
      <Switch>
        <Route exact path="/">
          <header className="header">
            <img
              src={logo}
              alt="Logo Rick and Morty show"
              className="App__logo"
            />
            <h1 className="App__title">
              Directorio con los Personajes de la Serie
            </h1>
          </header>
          <main>
            <Filters
              handleFilter={handleFilter}
              name={name}
              gender={gender}
              specie={specie}
              status={userstatus}
            />
            <CharactersList characters={filterCharacters} name={name} />
          </main>
        </Route>
        <Route exact path="/character/:id" render={renderDetail} />
      </Switch>
    </div>
  );
};

export default AppCharacters;
