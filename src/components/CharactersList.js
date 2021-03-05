import React from "react";
import Character from "./Character";
import CharacterNotFound from "./CharacterNotFound";
import "../stylesheet/CharactersList.css";

const CharactersList = (props) => {
  console.log(props.characters);

  const uElements = props.characters.map((character) => {
    if (props.characters === []) {
      return (
        <div className="container">
          <CharacterNotFound character={character} />
        </div>
      );
    } else
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
