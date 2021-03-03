import React from "react";
import "../stylesheet/Pokemon.css";
import PropTypes from "prop-types";

const Character = (props) => {
  //const Characters = "hola"//props.characterProp.map((characters, id)=> {
  return (
    //key={id}
    <li className="types">"characters"</li>
  );
};
/*return (
    <article className="containerPoke">
      <img src={props.characterProp.url}></img>
      <h2 className="name">{props.characterProp.name}</h2>
      <ul className="typePokemons">{Characters}</ul>
    </article>
  );
};*/

Character.propTypes = {
  characterProp: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
};
export default Character;
