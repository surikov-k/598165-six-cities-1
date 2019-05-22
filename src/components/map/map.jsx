import React from 'react';
import PropTypes from 'prop-types';
// import leaflet from 'leaflet';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this._mapCenter = [52.38333, 4.9];
    this._zoom = 12;

    this.state = {
      activePin: null,
    };
  }


  componentDidMount() {
    const {offers} = this.props;

    this._mapInit();
    offers.forEach((it) => {
      this._addPin(it.origin);
    });

  }
  render() {
    return <div id="map" ref={this._mapRef} style={{height: 823 + `px`}}></div>;
  }

  _addPin(coords) {
    const leaflet = this.props.leaflet;

    leaflet
      .marker(coords, {icon: this._icon})
      .addTo(this._map);

  }

  _mapInit() {
    const leaflet = this.props.leaflet;

    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    this._map = leaflet.map(this._mapRef.current, {
      center: this._mapCenter,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._map.setView(this._mapCenter, this._zoom);
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
    premium: PropTypes.bool,
    origin: PropTypes.arrayOf(PropTypes.number).isRequired,
  })),
  leaflet: PropTypes.object.isRequired,
};

export default Map;
