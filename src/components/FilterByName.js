import "../stylesheet/filterByName.css";
import { Route, Switch, Link } from "react-router-dom";

const FilterByName = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    //props.handleFilter("name", e.target.value);
    props.handleFilter({
      key: "name",
      value: e.target.value,
    });
  };
  return (
    <>
      <label className="form__label display-block" htmlFor="name">
        Nombre-----
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
export default FilterByName;
