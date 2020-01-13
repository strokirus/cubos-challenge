import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, object, string } from 'prop-types';
import Loading from '../../components/Loading/Loading';
import MapComponent from '../../components/MapComponent/MapComponent';
import ModalComponent from '../../components/ModalComponent/ModalComponent';

import {
  fetchStations,
} from './actions';

import history from '../../helpers/history';

import { TOTAL_ZOOM } from '../../settings';

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
    if (zoom.target.getZoom() && zoom.target.getZoom() <= TOTAL_ZOOM) {
      this.goHome();
    }
  }

  render() {
    const { stations } = this.props;
    const { open, station } = this.state;

    return (
      <Fragment>
        {stations && stations.data.isFetching &&
          <Loading />
        }

        <Fragment>
          {stations && stations.data.info.stations && stations.data.info.stations.length > 0 &&
            <MapComponent
              center={{
                latitude: stations.data.info.location.latitude,
                longitude: stations.data.info.location.longitude,
              }}
              points={[stations.data.info.stations]}
              onClick={this.onClickStation}
              zoom={10}
              zoomend={this.onChangeZoom}
            />
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
          <ModalComponent
            open={open}
            onCloseModal={this.onCloseModal}
            title={station.name}
            info={station}
          />
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
