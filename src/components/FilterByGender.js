import PropTypes from "prop-types";

const FilterByGender = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "gender",
      value: e.target.value,
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="gender">
        GÉNERO
      </label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        value={props.gender}
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="Female">Mujer</option>
        <option value="Male">Hombre</option>
        <option value="unknown">Desconocido</option>
      </select>
    </>
  );
};

FilterByGender.propTypes = {
  characterProp: PropTypes.shape({
    gender: PropTypes.string,
  }),
};

export default FilterByGender;
