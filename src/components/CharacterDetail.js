import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoDetail from "../images/logoDetail.jpg";
import "../stylesheet/CharacterDetail.scss";

const CharacterDetail = (props) => {
  if (props.character === undefined) {
    return (
      <div className="container__detail--notfound">
        <section className="header__detail--notfound">
          <Link className="name__link--detailnot" to="/">
            <h2 className="title__detail--notfound">Character not found</h2>
            <img
              src={logoDetail}
              alt="Logo Rick and Morty show"
              className="logo__detail--notfound"
            />
            <p className="pargraph__detail--notfound">Try again</p>
          </Link>
        </section>
      </div>
    );
  } else {
    return (
      <div className="container__detail">
        <section className="section__detail">
          <Link
            className="name__link--detail"
            to={`/character/${props.character.id}`}
          />
          <article className="container__detail--character">
            <img className="image__detail" src={props.character.image}></img>
            <div className="container__name">
              <h2 className="name__detail">
                {`Name: ` + props.character.name}
              </h2>
              <h2 className="name__detail">
                {`Specie: ` + props.character.specie}
              </h2>
              <h2 className="name__detail">
                {`Gender: ` + props.character.gender}
              </h2>
              <h2 className="name__detail">
                {`Origin: ` + props.character.origin}
              </h2>
              <h2 className="name__detail">
                {`Number of episodes: ` + props.character.episodes.length}
              </h2>
              <h2 className="name__detail">
                {`Status: ` + props.character.userstatus}
              </h2>
              <Link className="name__link--detail" to="/">
                <span className=" icon__sign--detail fas fa-undo"></span>
              </Link>
            </div>
          </article>
        </section>
      </div>
    );
  }
};
CharacterDetail.propTypes = {
  characterProp: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    specie: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.string,
    episodes: PropTypes.array,
    userstatus: PropTypes.string,
  }),
};
export default CharacterDetail;
