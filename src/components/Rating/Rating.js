import React from 'react';
import { func, string } from 'prop-types';

const Rating = ({ text, onClick }) => (
  <span onClick={onClick}>
    {text}
  </span>
);

Rating.propTypes = {
  text: string.isRequired,
  onClick: func,
};

Rating.defaultProps = {
  onClick: () => {},
};

export default Rating;
