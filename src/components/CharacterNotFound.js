import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logonegro.png";
import "../stylesheet/CharacterDetail.css";

const CharacterNotFound = (props) => {
  console.log(props.character);
  return (
    <div className="">
      <header className="header">
        <h2 className="title">Usuario no encontrado</h2>
        <Link to="/">
          <span className=" fab fa-reddit-alien"></span>
        </Link>
      </header>
      <section>
        <p>Inténtalo de nuevo</p>
      </section>
    </div>
  );
};

export default CharacterNotFound;
