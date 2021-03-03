const FilterBySpecies = (props) => {
  const handleChange = (e) => {
    //console.log(e.target.value);
    //props.handleFilter("name", e.target.value);
    props.handleFilter({
      key: "specie",
      value: e.target.value,
    });
  };
  return (
    <form>
      <label className="form__label display-block" htmlFor="specie">
        Género:
      </label>
      <select
        className="form__input-text"
        name="specie"
        id="specie"
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="female">Humano</option>
        <option value="male">Alien</option>
      </select>
    </form>
  );
};
export default FilterBySpecies;
