import PropTypes from "prop-types";

const FilterByStatus = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "userstatus",
      value: e.target.value,
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="userstatus">
        ESTADO
      </label>
      <select
        className="form__input-text"
        name="userstatus"
        id="userstatus"
        value={props.status}
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="unknown">Desconocido</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
      </select>
    </>
  );
};

FilterByStatus.propTypes = {
  characterProp: PropTypes.shape({
    status: PropTypes.string,
  }),
};

export default FilterByStatus;
