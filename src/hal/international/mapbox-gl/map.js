import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { Marker } from './marker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';
import { PositionToLngLat } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', Marker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
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
    const nativeMap = new RMapBoxGL(dom, options, mapKey);
    await new Promise(resolve => nativeMap.map.on('load', resolve));
    return nativeMap;
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}