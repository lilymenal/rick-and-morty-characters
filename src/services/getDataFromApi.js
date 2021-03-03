const getDataFromApi = () => {
  return (
    fetch(
      "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
    )
      //"https://rickandmortyapi.com/documentation/#get-all-characters")
      .then((response) => response.json())
      .then((data) => {
        return data.results.map((user) => {
          return {
            id: user.id,
            name: user.name,
            userstatus: user.status,
            specie: user.species,
            gender: user.gender,
            origin: user.origin.name,
            created: user.created,
            image: user.iamge,
          };
        });
      })
  );
};
export default getDataFromApi;
