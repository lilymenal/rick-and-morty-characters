import React from "react";
import PropTypes from "prop-types";
import "../stylesheet/CharacterNotFound.scss";

const CharacterNotFound = (props) => {
  return (
    <article className="container__notfound">
      <h2 className="title__notfound">
        "There's no character that matches what you're looking for...{" "}
        {props.name}" Try again!
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
