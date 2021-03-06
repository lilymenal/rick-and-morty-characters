import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.handleFilter({
      key: "name",
      value: e.target.value,
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        NAME
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        value={props.name}
        onChange={handleChange}
      />
    </>
  );
};

FilterByName.propTypes = {
  characterProp: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default FilterByName;
