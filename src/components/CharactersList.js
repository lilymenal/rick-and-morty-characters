import React from "react";
import Character from "./Character";
import "../stylesheet/PokeList.css";

const CharactersList = (props) => {
  const uElements = props.characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        {" "}
        <Character character={character} />
      </li>
    );
  });
  return (
    <div className="container">
      <h1 className="tittle">Rick and Morty</h1>
      <input className="form__input-text" type="text" name="name" id="name" />
      <ul className="itemContainer">{uElements}</ul>
    </div>
  );
};

export default CharactersList;
