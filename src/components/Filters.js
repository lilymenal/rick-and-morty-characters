import PropTypes from "prop-types";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import "../stylesheet/Filters.scss";
const Filters = (props) => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className="filter__container">
      <h2 className="title__filter">Find them here filtering by</h2>
      <form className="form__container" onSubmit={handleForm}>
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        <FilterByGender
          handleFilter={props.handleFilter}
          gender={props.gender}
        />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          specie={props.specie}
        />
        <FilterByStatus
          handleFilter={props.handleFilter}
          status={props.status}
        />
      </form>
    </section>
  );
};

Filters.propTypes = {
  characterProp: PropTypes.shape({
    handleFilter: PropTypes.func,
    gender: PropTypes.string,
    name: PropTypes.string,
    specie: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default Filters;
