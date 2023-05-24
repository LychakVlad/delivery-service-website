import axios from 'axios';

export const fetchCities = (searchTerm) => {
  return axios.get(
    `https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json&extratags=place_id,display_name,type,lat,lon&accept-language=en&countrycodes=us`
  );
};
