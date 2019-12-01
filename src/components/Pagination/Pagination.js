import React from 'react';
import { func, number } from 'prop-types';

import {
  TOTAL_PAGINATION,
} from '../../settings';

import {
  paginate,
} from '../../helpers/pagination';

const Pagination = ({ current, total, size, onClick }) => {
  const pag = paginate(total, current, size, TOTAL_PAGINATION);

  return (
    <footer id="pag">
      <ul id="pagination">
        {pag.pages.map(p => (
          <li
            key={p}
            onClick={e => onClick(p, e)}
            className={p === pag.current && 'selected'}
          >
            {p}
          </li>
        ))}
      </ul>
    </footer>
  );
};

Pagination.propTypes = {
  current: number,
  onClick: func,
  total: number,
  size: number,
};

Pagination.defaultProps = {
  current: 0,
  total: 0,
  size: 0,
  onClick: () => {},
};

export default Pagination;
