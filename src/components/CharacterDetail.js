/*el planeta de origen, el número de episodios en los que
aparece y si está vivo o muerto.*/

import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../stylesheet/CharacterDetail.css";

const CharacterDetail = (props) => {
  console.log(props.character);
  if (props.character === undefined) {
    return (
      <div className="container">
        <div className="modal__dialog">
          <div className="modal__content">
            <header className="header">
              <h2 className="title">Usuario no encontrado</h2>
              <Link to="/">
                <span className="modal__close icon fas fa-times"></span>
              </Link>
            </header>
            <section>
              <p>Inténtalo de nuevo</p>
            </section>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="modal__content">
          <header className="modal__header">
            <img src={logo} alt="Logo Rick and Morty show" className="logo" />
            <Link to="/">
              <span className="modal__close icon fas fa-times">volver</span>
            </Link>
          </header>
          <section className="container__detail">
            <Link
              className="name__link"
              to={`/character/${props.character.id}`}
            >
              <article className="containerCharacter">
                <img src={props.character.image}></img>
                <div className="container__name">
                  <h2 className="name_Detail">
                    {`Nombre: ` + props.character.name}
                  </h2>
                  <h2 className="name_Detail">
                    {`Especie: ` + props.character.specie}
                  </h2>
                  <h2 className="name_Detail">
                    {`Género: ` + props.character.gender}
                  </h2>
                  <h2 className="name_Detail">
                    {`Origen: ` + props.character.origin}
                  </h2>
                  <h2 className="name_Detail">
                    {`Número de episodios: ` + props.character.episodes.length}
                  </h2>
                  <h2 className="name_Detail">
                    {`Estado: ` + props.character.userstatus}
                  </h2>
                </div>
              </article>
            </Link>
          </section>
        </div>
      </div>
    );
  }
};
/*
            <img className="card__img" src="" alt="" />
            <ul className="ml-1 mt-1">
              <li>Género:{props.character.gender} </li>
              <li>Especie: {props.character.specie}</li>
              <li>Origen: {props.character.origin}</li>
              <li>Estado: {props.character.status}</li>
              <li>Episodios:{props.character.episodes.length}</li>
            </ul>
*/

export default CharacterDetail;
