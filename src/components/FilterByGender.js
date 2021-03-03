const FilterByGender = (props) => {
  const handleChange = (e) => {
    //console.log(e.target.value);
    //props.handleFilter("name", e.target.value);
    props.handleFilter({
      key: "gender",
      value: e.target.value,
    });
  };
  return (
    <form>
      <label className="form__label display-block" htmlFor="gender">
        Género:
      </label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
        <option value="unknown">Desconocido</option>
      </select>
    </form>
  );
};
export default FilterByGender;
