import React from "react";
import PropTypes from "prop-types";
import "../stylesheet/CharacterNotFound.scss";

const CharacterNotFound = (props) => {
  return (
    <article className="container__notfound">
      <h2 className="title__notfound">
        "No hay ningún personaje que coincida con lo que buscas... {props.name}"
      </h2>
    </article>
  );
};
CharacterNotFound.propTypes = {
  characterProp: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default CharacterNotFound;
