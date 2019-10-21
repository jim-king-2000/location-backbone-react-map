import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { Marker } from './marker';
import { PositionToLngLat } from './utils';
import { Polyline } from './polyline';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', Marker],
  ['Polyline', Polyline],
]);

export class RMapBoxGL {
  constructor(dom, options, mapKey) {
    mapboxgl.accessToken = mapKey;
    this.map = new mapboxgl.Map({
      container: dom,
      antialias: true,
      center: PositionToLngLat(options.center),
      zoom: options.zoom,
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

  static async loadMap(dom, options, mapKey) {
    return new RMapBoxGL(dom, options, mapKey);
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return [];
  }
  
  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}