import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import "../stylesheet/Filters.css";
const Filters = (props) => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className="filter__container">
      <h2 className="h2">Encuéntralos aquí filtrando por</h2>
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
export default Filters;
