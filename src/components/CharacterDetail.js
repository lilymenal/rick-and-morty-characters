/*el planeta de origen, el número de episodios en los que
aparece y si está vivo o muerto.*/

import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logonegro.png";
import "../stylesheet/CharacterDetail.css";

const CharacterDetail = (props) => {
  console.log(props.character);

  if (props.character === []) {
    return (
      <div className="container">
        <div className="">
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
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="">
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
                  <Link className="name__link" to="/">
                    <span className=" icon__sign fas fa-undo"></span>
                    <span className=" icon">Regresa</span>
                  </Link>
                </div>
              </article>
            </Link>
          </section>
        </div>
      </div>
    );
  }
};

export default CharacterDetail;
