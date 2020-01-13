import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import Loading from '../../components/Loading/Loading';
import MapComponent from '../../components/MapComponent/MapComponent';

import {
  fetchNetworks,
} from './actions';

import {
  routePaths,
} from '../../settings';

import history from '../../helpers/history';

class Networks extends Component {
  /**
   * Trigged by change text search and check with value is valid by cep mask
   * @param event Event passed by user changes values
  */
  componentDidMount = () => {
    this.props.fetchNetworks();
  }

  /**
   * Trigged by user when click in keys. Verify if user can do search or
   * want clear your search
   * @param event Event passed by user changes values
  */
  onClickNetwork = (marker) => {
    if (marker.options && marker.options.id) {
      history.push(`${routePaths.stations}/${marker.options.id}`);
      location.href = `${routePaths.stations}/${marker.options.id}`;
    }
  };

  render() {
    const { networks } = this.props;

    return (
      <Fragment>
        {(networks && networks.show && networks.info.isFetching) &&
          <Loading />
        }

        <Fragment>
          {networks && networks.info.results.length > 0 &&
            <MapComponent
              center={{
                latitude: networks.info.results[0].location.latitude,
                longitude: networks.info.results[0].location.latitude,
              }}
              points={networks && Object.values(networks.info.countries)}
              singleMarker
              onClick={this.onClickNetwork}
            />
          }
        </Fragment>

      </Fragment>
    );
  }
}

Networks.propTypes = {
  fetchNetworks: func.isRequired,
  networks: object,
};

Networks.defaultProps = {
  networks: { },
};

function mapStateToProps(state, ownProps) {
  const { networks } = state;
  return {
    ...ownProps,
    networks,
  };
}

const mapDispatchToProps = {
  fetchNetworks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Networks);
