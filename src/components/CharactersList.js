import React from "react";
import Character from "./Character";
import "../stylesheet/CharactersList.css";
import logo from "../images/logo.png";

const CharactersList = (props) => {
  const uElements = props.characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <Character character={character} />
      </li>
    );
  });
  return (
    <div className="container">
      <img src={logo} alt="Logo Rick and Morty show" className="logo" />
      <form>
        <input className="form__input-text" type="text" name="name" id="name" />
      </form>
      <ul className="itemContainer">{uElements}</ul>
    </div>
  );
};

export default CharactersList;
