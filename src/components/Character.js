import React from "react";
import "../stylesheet/Character.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import muerto from "../images/muerto.jpg";

const Character = (props) => {
  let deathStatus;
  if (props.character.userstatus === "Dead") {
    deathStatus = (
      <>
        {props.character.userstatus}
        <img src={muerto} alt="Character is dead" className="muerto" />
      </>
    );
  } else {
    deathStatus = <>{props.character.userstatus}</>;
  }
  return (
    <Link className="name__link" to={`/character/${props.character.id}`}>
      <article className="containerCharacter">
        <img className="imageCharacter" src={props.character.image}></img>
        <div className="container__name--character">
          <h2 className="name">Nombre: {props.character.name}</h2>
          <h2 className="name">Especie: {props.character.specie}</h2>
          <h2 className="name">Estado: {deathStatus}</h2>
        </div>
      </article>
    </Link>
  );
};

Character.propTypes = {
  characterProp: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    specie: PropTypes.string,
  }),
};
export default Character;
