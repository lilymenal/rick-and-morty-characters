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
        GENDER
      </label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        value={props.gender}
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="unknown">Unknown</option>
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
