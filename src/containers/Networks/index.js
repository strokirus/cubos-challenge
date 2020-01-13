import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { func, object } from 'prop-types';

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
          <p
            className="title-loading"
          >
            Loading...
          </p>
        }

        <Fragment>
          {networks && networks.info.results.length > 0 &&
            <Map
              className="markercluster-map"
              center={
                [
                  networks.info.results[0].location.latitude,
                  networks.info.results[0].location.longitude,
                ]
              }
              zoom={1}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />

              {networks && Object.values(networks.info.countries).map((c, cc) => (
                <MarkerClusterGroup
                  key={cc}
                  singleMarkerMode
                  onMarkerClick={marker => this.onClickNetwork(marker)}
                >
                  {c.map((g, i) => (
                    <Marker
                      key={i}
                      id={g.id}
                      position={[g.location.latitude, g.location.longitude]}
                    />
                  ))}
                </MarkerClusterGroup>
              ))}
            </Map>
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