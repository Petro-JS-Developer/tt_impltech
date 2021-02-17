export const BASE_URL = 'https://swapi.dev/api/people';

export const getCharacter = (id = '', options) => fetch(
  `${BASE_URL}/${id}`, options,
);
