import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterBySpecies from "./FilterBySpecies";
import "../stylesheet/Filters.css";
const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterByGender handleFilter={props.handleFilter} />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
