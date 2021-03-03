//import React from "react";
import React, { useEffect, useState } from "react";
//import { Route, Switch } from "react-router-dom";
import CharactersList from "./CharactersList";
import getDataFromApi from "../services/getDataFromApi";
import PropTypes from "prop-types";

console.log(getDataFromApi());
const App = () => {
  const [characters, setCharacters] = useState([]);
  /*const [name, setName] = useState("");
  const [gender, setGender] = useState("all");
  const [cities, setCities] = useState([]);*/
  useEffect(() => {
    //console.log(getDataFromApi());
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  return <CharactersList characters={characters} />;
};
export default App;
