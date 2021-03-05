import React from "react";
import Character from "./Character";
import CharacterNotFound from "./CharacterNotFound";
import "../stylesheet/CharactersList.css";

const CharactersList = (props) => {
  console.log(props.characters);

  if (props.characters.length === 0) {
    return (
      <article>
        <CharacterNotFound name={props.name} />
      </article>
    );
  } else {
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
  }
};

export default CharactersList;
