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
export const requestNetworks = (params = {}) => {
  const paramsSearch = { };

  Object.keys(params).forEach((k) => {
    paramsSearch[k] = params[k];
  });

  return axios({
    url: `${requestBuilder('networks', paramsSearch)}`,
    method: 'GET',
  }).then(result => (
    result
  ));
};

export default {
  requestNetworks,
};
