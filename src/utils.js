/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const imagePath = value => (
  `https://image.tmdb.org/t/p/w1280${value}`
);

/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const ratingFormat = value => (
  `${(value * 10).toFixed(0)}%`
);

/**
 * Genres fukl
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const genresFull = (array, dicGenres) => {
  let genres = [];

  genres = array.map(e => dicGenres.find(d => d.id === e));

  return genres;
};


/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const formatDate = (value) => {
  if (value && value.toString().length > 1) {
    return `${value}`;
  }

  return `0${value}`;
};


/**
 * Insert and force certain rules to cep (postal code in Brazil)
 *
 * @param value Value inserted by user
 * @return {String} formatted by rules of cep (postal code in Brazil)
 */
export const dateFormat = (value) => {
  const date = new Date(value);

  return `${formatDate(date.getDate())}/${formatDate(date.getMonth() + 1)}/${date.getFullYear()}`;
};

/**
 * Export all functions utils (mainaly used in all project)
 */
export default {
  imagePath,
  ratingFormat,
  dateFormat,
  genresFull,
};
