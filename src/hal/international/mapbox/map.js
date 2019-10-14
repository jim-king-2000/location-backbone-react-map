import { Marker } from './marker';
import { Polyline } from './polyline';

export class MapBox {
  constructor(dom, mapKey) {
    L.mapbox.accessToken = mapKey;
    this.map = L.mapbox.map(dom)
      .setView([31, 121], 11)
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
  
  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }

  addPolyline(path, options) {
    return new Polyline(this.map, path, options);
  }
}