import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';
import { MapView } from './mapView';
import { MapFeature } from './mapFeature';
import { PositionToLatLng } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', DomMarker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
]);

export class RGoogleMap {
  #map;
  #mapView;
  #mapFeature;

  constructor(dom, options) {
    this.#map = new google.maps.Map(dom, {
      center: PositionToLatLng(options.center),
      zoom: options.zoom,
      disableDefaultUI: true,
      maxZoom: 18,
    });
    this.#mapView = new MapView(this.#map);
    this.#mapFeature = new MapFeature(this.#map);
  }

  static async loadMap(dom, options) {
    return new RGoogleMap(dom, options);
  }

  static buildScriptTag(mapKey) {
    return [`//maps.google.cn/maps/api/js?key=${mapKey}`];
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