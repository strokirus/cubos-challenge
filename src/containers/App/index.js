import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, string, bool } from 'prop-types';

import {
  fetchDiscover,
  fetchSearch,
  setSearch,
} from './actions';
import SearchContainer from '../../components/SearchContainer/SearchContainer';

class AppContainer extends Component {
  /**
   * Trigged by change text search and check with value is valid by cep mask
   * @param event Event passed by user changes values
  */
  componentDidMount = () => {
    this.props.fetchDiscover();
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
  };

  render() {
    const { textSearch, discover, search } = this.props;

    return (
      <Fragment>
        <SearchContainer
          text={textSearch}
          onUpdate={this.onTextChange}
          onClick={this.onClickSubmit}
          onKeyUp={this.onKeyUp}
        />
      </Fragment>
    );
  }
}

AppContainer.propTypes = {
  fetchDiscover: func.isRequired,
  fetchSearch: func.isRequired,
  setSearch: func.isRequired,
  textSearch: string,
};

AppContainer.defaultProps = {
  textSearch: '',
  availableButton: false,
};

function mapStateToProps(state, ownProps) {
  const { textSearch } = state.app;
  return {
    ...ownProps,
    textSearch,
  };
}

const mapDispatchToProps = {
  fetchDiscover,
  fetchSearch,
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
