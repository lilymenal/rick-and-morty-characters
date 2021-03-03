import React from "react";
import Character from "./Character";
import "../stylesheet/CharactersList.css";
import FilterByName from "./FilterByName";

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
      <ul className="itemContainer">{uElements}</ul>
    </div>
  );
};

export default CharactersList;
