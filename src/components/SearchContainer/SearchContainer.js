import React from 'react';
import { func, string } from 'prop-types';

const SearchContainer = ({ onUpdate, text, onKeyUp }) => (
  <header>
    <div>
      <input
        type="text"
        value={text}
        onChange={onUpdate}
        onKeyUp={onKeyUp}
        placeholder="Busque um filme por nome, ano ou gênero..."
        maxLength="40"
        tabIndex="0"
        autoFocus
      />
    </div>
  </header>
);

SearchContainer.propTypes = {
  onUpdate: func.isRequired,
  text: string,
  onKeyUp: func,
};

SearchContainer.defaultProps = {
  text: '',
  availableButton: false,
  onKeyUp: () => {},
};

export default SearchContainer;
