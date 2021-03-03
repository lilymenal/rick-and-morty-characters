import React from "react";
import "../stylesheet/Character.css";
import PropTypes from "prop-types";
import { Route, Switch, Link } from "react-router-dom";

const Character = (props) => {
  /*const Characters = props.characterProp.map((characters, id)=> {
  return (
    //key={id}
    <li className="types"></li>
  );
};*/
  //<ul className="typePokemons">{Characters}</ul>
  return (
    <Link className="name" to={`/character/${props.character.id}`}>
      <article className="containerPoke">
        <img src={props.character.image}></img>
        <div className="container__name">
          <h2 className="name">{props.character.name}</h2>
          <h2 className="name">{props.character.specie}</h2>
        </div>
      </article>
    </Link>
  );
};

/*<img className="card__img" src={props.user.image} alt={`Foto de ${props.user.name}`} title={`Foto de ${props.user.name}`} />
        <h4 className="card__title">{props.user.name}</h4>
        <p className="card__description">
          {props.user.city} / {getGender()}
        </p>*/

Character.propTypes = {
  characterProp: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
};
export default Character;
