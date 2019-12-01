import React from 'react';
import { func, string, number } from 'prop-types';

const Chip = ({ id, text, onClick }) => (
  <span
    key={id}
    onClick={onClick}
  >
    {text}
  </span>
);

Chip.propTypes = {
  text: string.isRequired,
  onClick: func,
  id: number,
};

Chip.defaultProps = {
  text: '',
  id: 0,
  onClick: () => {},
};

export default Chip;
