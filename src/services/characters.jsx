const baseURL = "https://rickandmortyapi.com/api";

export async function getCharacters() {
  const response = await fetch(`${baseURL}/character`); // promesa
  const responseJson = await response.json(); // await solo se usa en promesas
  return responseJson;
}

export async function getCharactersBySearch(q) {
  const response = await fetch(`${baseURL}/character/?name=${q}`);
  const responseJson = await response.json();
  return responseJson;
}

export default {
  getCharacters,
  getCharactersBySearch,
};
