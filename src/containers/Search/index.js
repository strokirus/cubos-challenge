import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, string, object } from 'prop-types';

import {
  fetchDiscover,
  fetchSearch,
  setSearch,
} from './actions';

import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Pagination from '../../components/Pagination/Pagination';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import InfoListMovie from '../../components/InfoListMovie/InfoListMovie';

import {
  routePaths,
} from '../../settings';

import history from '../../helpers/history';


class Search extends Component {
  /**
   * Trigged by change text search and check with value is valid by cep mask
   * @param event Event passed by user changes values
  */
  componentDidMount = () => {
    const { query } = this.props;
    let { page } = this.props;

    if (!page) {
      page = parseInt(page, 10);
    }

    if (query && query.length > 0) {
      this.props.setSearch(query);
      this.props.fetchSearch({ page });
    } else {
      this.props.fetchDiscover({ page });
    }
  }

  /**
   * Trigged by change text search and check with value is valid by cep mask
   * @param event Event passed by user changes values
  */
  onTextChange = (event) => {
    this.props.setSearch(event.target.value);
  }

  /**
   * Trigged by user when click in keys. Verify if user can do search or
   * want clear your search
   * @param event Event passed by user changes values
  */
  onKeyUp = (event) => {
    if (event.key === 'Enter') {
      this.props.fetchSearch();
    }

    if (event.key === 'Escape') {
      this.props.setSearch('');
    }
  };

  /**
   * Trigged by user when click in keys. Verify if user can do search or
   * want clear your search
   * @param event Event passed by user changes values
  */
  onClickPagination = (page) => {
    const { discover } = this.props;

    if (discover.show) {
      this.props.fetchDiscover({ page });
    } else {
      this.props.fetchSearch({ page });
    }
  };

  /**
   * Trigged by user when click in keys. Verify if user can do search or
   * want clear your search
   * @param event Event passed by user changes values
  */
  onClickMovie = (id) => {
    if (id) {
      history.push(`${routePaths.movie}/${id}`);
      location.href = `${routePaths.movie}/${id}`;
    }
  };

  render() {
    const { textSearch, discover, search } = this.props;

    return (
      <Fragment>
        <HeaderTitle
          title={discover.show ? 'Discover' : 'Movies'}
        />

        <SearchContainer
          text={textSearch}
          onUpdate={this.onTextChange}
          onClick={this.onClickSubmit}
          onKeyUp={this.onKeyUp}
        />

        {(discover && discover.show && discover.isFetching) || 
        (search && search.show && search.isFetching) &&
          <p>Carregando</p>
        }

        {discover && discover.show && discover.results && discover.results.map(d => (
          <InfoListMovie
            key={d.id}
            info={d}
            onClick={e => this.onClickMovie(d.id, e)}
          />
        ))}

        {discover && discover.show && discover.results.length > 0 &&
          <Pagination
            onClick={e => this.onClickPagination(e)}
            current={discover.page}
            total={discover.totalItens}
            size={20}
          />
        }

        {search && search.show && search.results && search.results.map(d => (
          <InfoListMovie
            key={d.id}
            info={d}
            onClick={e => this.onClickMovie(d.id, e)}
          />
        ))}

        {search && search.show && search.results.length > 0 &&
          <Pagination
            onClick={e => this.onClickPagination(e)}
            current={search.page}
            total={search.totalItens}
            size={20}
          />
        }

      </Fragment>
    );
  }
}

Search.propTypes = {
  fetchDiscover: func.isRequired,
  fetchSearch: func.isRequired,
  setSearch: func.isRequired,
  textSearch: string,
  discover: object,
  search: object,
  query: string,
  page: string,
};

Search.defaultProps = {
  textSearch: '',
  discover: {},
  search: {},
  query: '',
  page: '0',
};

function mapStateToProps(state, ownProps) {
  const { textSearch, discover, search } = state.search;
  return {
    ...ownProps,
    textSearch,
    discover,
    search,
  };
}

const mapDispatchToProps = {
  fetchDiscover,
  fetchSearch,
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
