import React from "react";
import Character from "./Character";
import CharacterNotFound from "./CharacterNotFound";
import "../stylesheet/CharactersList.scss";

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
        <li className="card__list" key={character.id}>
          <Character character={character} />
        </li>
      );
    });
    return (
      <div className="container__list">
        <ul className="container__list--characters">{uElements}</ul>
      </div>
    );
  }
};

export default CharactersList;
