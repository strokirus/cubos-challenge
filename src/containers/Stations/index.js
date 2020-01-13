import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, object, string } from 'prop-types';
import { Map, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import Modal from 'react-responsive-modal';

import {
  fetchStations,
} from './actions';

import history from '../../helpers/history';

class Stations extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      station: { },
    };
  }

  /**
   * Trigged by change text search and check with value is valid by cep mask
   * @param event Event passed by user changes values
  */
  componentDidMount = () => {
    const { id } = this.props;

    if (id && id.length > 0) {
      this.props.fetchStations(id);
    }
  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onClickStation = (marker) => {
    this.setState({ open: true });
    this.setState({ station: marker.options.station });
  }

  // eslint-disable-next-line react/sort-comp
  goHome = () => {
    history.push('/');
    location.href = '/';
  }

  backButton = (e) => {
    this.goHome(e);
  }

  onChangeZoom = (zoom) => {
    if (zoom.target.getZoom() && zoom.target.getZoom() <= 5) {
      this.goHome();
    }
  }

  render() {
    const { stations } = this.props;
    const { open, station } = this.state;

    return (
      <Fragment>
        {(stations && stations.data.isFetching) &&
          <p
            className="title-loading"
          >
            Loading...
          </p>
        }

        <Fragment>
          {stations && stations.data.info.stations && stations.data.info.stations.length > 0 &&
            <Map
              className="markercluster-map"
              center={
                [
                  stations.data.info.location.latitude,
                  stations.data.info.location.longitude,
                ]
              }
              zoom={10}
              onzoomend={e => this.onChangeZoom(e)}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />

              <MarkerClusterGroup
                onMarkerClick={marker => this.onClickStation(marker)}
              >
                {stations.data.info.stations.map((g, i) => (
                  <Marker
                    key={i}
                    id={g.id}
                    station={g}
                    position={[g.latitude, g.longitude]}
                  />
                ))}
              </MarkerClusterGroup>
            </Map>
          }

          {stations && stations.data.info.stations && stations.data.info.stations.length === 0 &&
            <Fragment>
              <div
                className="back-close"
                onClick={e => this.backButton(e)}
              >
                x
              </div>
              <p
                className="title-loading"
              >
                {stations.data.info.name}
                <br />
                No stations
                <br />
                Company: {stations.data.info.company.map(c => (c))}
                <br />
                Location: {`${stations.data.info.location.city} - ${stations.data.info.location.country}`}
              </p>
            </Fragment>
          }
        </Fragment>

        {Object.keys(station).length > 0 &&
          <Modal
            open={open}
            onClose={this.onCloseModal}
          >
            <h2
              style={{ width: '95%', lineHeight: 'normal' }}
            >
              {station.name}
            </h2>

            {Object.keys(station).map((s) => {
              if (s !== 'name' && typeof station[s] !== 'object') {
                return (<p>{`${s}: ${station[s]}`}</p>);
              } else if (typeof station[s] === 'object') {
                return (Object.keys(station[s]).map(e => (
                  <p>{`${e}: ${station[s][e]}`}</p>
                )));
              }

              return ('');
            })}
          </Modal>
        }
      </Fragment>
    );
  }
}

Stations.propTypes = {
  fetchStations: func.isRequired,
  stations: object,
  id: string.isRequired,
};

Stations.defaultProps = {
  stations: { },
};

function mapStateToProps(state, ownProps) {
  const { stations } = state;
  return {
    ...ownProps,
    stations,
  };
}

const mapDispatchToProps = {
  fetchStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
