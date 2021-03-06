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
        STATUS
      </label>
      <select
        className="form__input-text"
        name="userstatus"
        id="userstatus"
        value={props.status}
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="unknown">Unknown</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
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
