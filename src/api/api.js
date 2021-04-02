/* eslint-disable no-console */
const BASE_URL = 'https://rickandmortyapi.com/api/';

const request = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`);

  try {
    if (!response.ok) {
      console.log(response.statusText);
    }
    const result = await response.json();

    return result;
  } catch {
    throw new Error();
  }
};

export const getCharacters = () => request('character');
export const getLocations = () => request('location');
export const getEpisodes = () => request('episode');
