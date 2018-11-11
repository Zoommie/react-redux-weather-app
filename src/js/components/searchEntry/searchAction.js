import axios from 'axios';

const API_KEY = "a882ae67ac29d637e1e032ca6b1ad90d";

export function searchTheCity(name) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=${API_KEY}`;

  const promise = axios.get(url);

  // Action Creators

  return {
    type: 'SEARCH_CITY',
    payload: promise
  };
}
