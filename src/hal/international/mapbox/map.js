import { Marker } from './marker';
import { Polyline } from './polyline';
import { PositionToLatLng } from './utils';

export class MapBox {
  constructor(dom, options, mapKey) {
    L.mapbox.accessToken = mapKey;
    this.map = L.mapbox.map(dom)
      .setView(PositionToLatLng(options.center), options.zoom)
      .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return ['https://api.mapbox.com/mapbox.js/v3.2.0/mapbox.js'];
  }

  static buildCssTag() {
    return '//api.mapbox.com/mapbox.js/v3.2.0/mapbox.css';
  }
  
  addMarker(options) {
    return new Marker(this.map, options);
  }

  addPolyline(options) {
    return new Polyline(this.map, options);
  }
}