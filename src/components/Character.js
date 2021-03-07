import React from "react";
import "../stylesheet/Character.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Character = (props) => {
  let deathStatus;
  if (props.character.userstatus === "Dead") {
    deathStatus = (
      <>
        {props.character.userstatus}
        <i className=" dead__icon fas fa-dizzy"></i>
      </>
    );
  } else {
    deathStatus = <>{props.character.userstatus}</>;
  }
  return (
    <Link className="linkcharacter" to={`/character/${props.character.id}`}>
      <article className="container__character">
        <img className="image__character" src={props.character.image}></img>
        <section className="container__name--character">
          <h2 className="text__character">Name: {props.character.name}</h2>
          <h2 className="text__character">Specie: {props.character.specie}</h2>
          <h2 className="text__character">Status: {deathStatus}</h2>
        </section>
      </article>
    </Link>
  );
};

Character.propTypes = {
  characterProp: PropTypes.shape({
    userstatus: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    specie: PropTypes.string,
  }),
};
export default Character;
