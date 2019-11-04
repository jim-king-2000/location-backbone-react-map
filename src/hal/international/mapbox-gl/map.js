import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import MapboxLanguage  from '@mapbox/mapbox-gl-language';
import { Marker } from './marker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';
import { MapView } from './mapView';
import { MapFeature } from './mapFeature';
import { PositionToLngLat } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', Marker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
]);

export default class RMapBoxGL {
  #map;
  #mapView;
  #mapFeature;

  constructor(dom, options, mapKey) {
    mapboxgl.accessToken = mapKey;
    this.#map = new mapboxgl.Map({
      container: dom,
      antialias: true,
      center: PositionToLngLat(options.center || {
        latitude: 39.915,
        longitude: 116.404,
      }),
      zoom: options.zoom || 11,
      maxZoom: options.maxZoom || 17,
      antialias: true,
      style: 'mapbox://styles/mapbox/streets-v11'
    });
    this.#map.addControl(new MapboxLanguage({
      defaultLanguage: 'zh'
    }));
    this.#mapView = new MapView(this.#map);
    this.#mapFeature = new MapFeature(this.#map);
  }

  static async loadMap(dom, options, mapKey) {
    const nativeMap = new RMapBoxGL(dom, options, mapKey);
    await new Promise(resolve => nativeMap.#map.on('load', resolve));
    return nativeMap;
  }

  destroy() {
    this.#map.remove();
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.#map, options);
  }

  get MapView() {
    return this.#mapView;
  }

  get MapFeature() {
    return this.#mapFeature;
  }
}
