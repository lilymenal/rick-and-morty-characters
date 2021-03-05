import React from "react";
import "../stylesheet/Character.css";
import PropTypes from "prop-types";
import { Route, Switch, Link } from "react-router-dom";
import muerto from "../images/muerto.jpg";

const Character = (props) => {
  if (props.character.userstatus === "Dead") {
    return (
      <Link className="name__link" to={`/character/${props.character.id}`}>
        <article className="containerPoke">
          <img src={props.character.image}></img>
          <div className="container__name--character">
            <h2 className="name">{props.character.name}</h2>
            <h2 className="name">{props.character.specie}</h2>
            <h2 className="name">
              {props.character.userstatus}
              <img src={muerto} alt="Character is dead" className="muerto" />
            </h2>
          </div>
        </article>
      </Link>
    );
  } else {
    return (
      <Link className="name__link" to={`/character/${props.character.id}`}>
        <article className="containerPoke">
          <img src={props.character.image}></img>
          <div className="container__name--character">
            <h2 className="name">{props.character.name}</h2>
            <h2 className="name">{props.character.specie}</h2>
            <h2 className="name fab fa-reddit-alien">
              {props.character.userstatus}
            </h2>
          </div>
        </article>
      </Link>
    );
  }
};

Character.propTypes = {
  characterProp: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    specie: PropTypes.string,
  }),
};
export default Character;
