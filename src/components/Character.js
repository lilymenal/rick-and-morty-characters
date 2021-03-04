import React from "react";
import "../stylesheet/Character.css";
import PropTypes from "prop-types";
import { Route, Switch, Link } from "react-router-dom";

const Character = (props) => {
  return (
    <Link className="name__link" to={`/character/${props.character.id}`}>
      <article className="containerPoke">
        <img src={props.character.image}></img>
        <div className="container__name--character">
          <h2 className="name">{props.character.name}</h2>
          <h2 className="name">{props.character.specie}</h2>
        </div>
      </article>
    </Link>
  );
};

/*Character.propTypes = {
  characterProp: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    specie: Proptypes.string,
  }),
};*/
export default Character;
