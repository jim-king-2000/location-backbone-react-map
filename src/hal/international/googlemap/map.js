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
  #dom;
  #map;
  #mapView;
  #mapFeature;

  constructor(dom, options) {
    this.#dom = dom;
    this.#map = new google.maps.Map(dom, {
      center: PositionToLatLng(options.center) ||
      PositionToLatLng({
        latitude: 39.915,
        longitude: 116.404,
      }),
      zoom: options.zoom || 11,
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

  destroy() {
    if (!this.#dom) return;
    while(this.#dom.firstChild) {
      this.#dom.removeChild(this.#dom.firstChild);
    }
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