import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { Marker } from './marker';
import { Polyline } from './polyline';

export class MapBoxGL {
  constructor(dom, mapKey) {
    mapboxgl.accessToken = mapKey;
    this.map = new mapboxgl.Map({
      container: dom,
      antialias: true,
      center: [121, 31],
      zoom: 11,
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return [];
  }
  
  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }

  // addPolyline(path, options) {
  //   return new Polyline(this.map, path, options);
  // }
}