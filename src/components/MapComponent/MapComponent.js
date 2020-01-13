import React from 'react';
import { object, bool, func, array, number } from 'prop-types';
import { Map, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const MapComponent = ({ center, points, singleMarker, onClick, zoom, zoomend }) => (
  <Map
    className="markercluster-map"
    center={
      [
        center.latitude || 38.7071,
        center.longitude || -9.13549,
      ]
    }
    zoom={zoom}
    onzoomend={zoomend}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />

    {points.map((c, cc) => (
      <MarkerClusterGroup
        key={cc}
        singleMarkerMode={singleMarker}
        onMarkerClick={marker => onClick(marker)}
      >
        {c.map((g, i) => (
          <Marker
            position={[
              g.latitude || g.location.latitude,
              g.longitude || g.location.longitude,
            ]}
            key={i}
            id={g.id}
            station={g}
          />
        ))}
      </MarkerClusterGroup>
    ))}
  </Map>
);

MapComponent.propTypes = {
  center: object.isRequired,
  singleMarker: bool,
  points: array,
  onClick: func,
  zoom: number,
  zoomend: func,
};

MapComponent.defaultProps = {
  singleMarker: false,
  onClick: () => {},
  zoomend: () => {},
  points: [],
  zoom: 1,
};

export default MapComponent;
