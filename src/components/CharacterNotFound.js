import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logonegro.png";
import "../stylesheet/CharacterNotFound.css";

const CharacterNotFound = (props) => {
  console.log(props.character);
  return (
    <section className="container__notfound">
      <h2 className="title">
        "No hay ningún personaje que coincida con la palabra {props.name}"
      </h2>
    </section>
  );
};

export default CharacterNotFound;
