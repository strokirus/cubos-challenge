import React from 'react';
import { string } from 'prop-types';

const HeaderTitle = ({ title }) => (
  <header id="page">
    <h1>{title}</h1>
  </header>
);

HeaderTitle.propTypes = {
  title: string,
};

HeaderTitle.defaultProps = {
  title: '',
};

export default HeaderTitle;
