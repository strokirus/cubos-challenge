import axios from 'axios';
import {
  requestBuilder,
} from '../../settings';

/**
 * Request to our service based in cep passed by user what information is
 * related of there cep
 * @param query Number of Cep formatted in formatCep rule (utils file)
 * @return {Object} Information related by our api and via cep with
 * logradouro, bairro, and geo (lat,lng)
 */
export const requestDiscover = (params = {}) => {
  const paramsSearch = { language: 'pt-BR' };

  Object.keys(params).forEach((k) => {
    paramsSearch[k] = params[k];
  });

  return axios({
    url: `${requestBuilder('discover', paramsSearch)}`,
    method: 'GET',
  }).then(result => (
    result
  ));
};

/**
 * Request to our service based in cep passed by user what information is
 * related of there cep
 * @param query Number of Cep formatted in formatCep rule (utils file)
 * @return {Object} Information related by our api and via cep with
 * logradouro, bairro, and geo (lat,lng)
 */
export const requestGenres = async (language) => {
  if (localStorage.getItem('genres') === null) {
    const resultGenres = await axios({
      url: `${requestBuilder('genre', { language: language || 'pt-BR' })}`,
      method: 'GET',
    }).then(result => (
      result
    ));

    if (resultGenres.status && resultGenres.data.genres) {
      localStorage.setItem('genres', JSON.stringify(resultGenres.data.genres));
    }
  }

  return JSON.parse(localStorage.getItem('genres')) || [];
};

/**
 * Request to our service based in cep passed by user what information is
 * related of there cep
 * @param query Number of Cep formatted in formatCep rule (utils file)
 * @return {Object} Information related by our api and via cep with
 * logradouro, bairro, and geo (lat,lng)
 */
export const requestSearch = (query, params = {}) => {
  const paramsSearch = { query, language: 'pt-BR' };

  Object.keys(params).forEach((k) => {
    paramsSearch[k] = params[k];
  });

  return axios({
    url: `${requestBuilder('search', paramsSearch)}`,
    method: 'GET',
  }).then(result => (
    result
  ));
};

export default {
  requestSearch,
  requestDiscover,
};
