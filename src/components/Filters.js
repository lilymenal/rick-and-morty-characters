import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterBySpecies from "./FilterBySpecies";
import "../stylesheet/Filters.css";
const Filters = (props) => {
  return (
    <section className="filter__container">
      <h2 className="h2">Encuéntralos aquí filtrando por</h2>
      <form className="form__container">
        <FilterByName handleFilter={props.handleFilter} />
        <FilterByGender handleFilter={props.handleFilter} />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
