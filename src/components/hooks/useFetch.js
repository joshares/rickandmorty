import axios from "axios";

export const fetchCharacters = async (name, page) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character?name=${name}&page=${page}`
  );
  return data;
};

export const fetchSingleCharacter = async (id) => {
  console.log(id);
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return data;
};
