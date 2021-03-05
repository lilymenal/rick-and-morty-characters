const FilterByStatus = (props) => {
  const handleChange = (e) => {
    //console.log(e.target.value);
    //props.handleFilter("name", e.target.value);
    props.handleFilter({
      key: "userstatus",
      value: e.target.value,
    });
  };
  return (
    <>
      <label className="form__label display-block" htmlFor="userstatus">
        Estado-----
      </label>
      <select
        className="form__input-text"
        name="userstatus"
        id="userstatus"
        value={props.status}
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="unknown">Desconocido</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
      </select>
    </>
  );
};
export default FilterByStatus;
