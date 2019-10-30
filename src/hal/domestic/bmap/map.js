import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';
import { MapView } from './mapView';
import { MapFeature } from './mapFeature';
import { PositionToPoint } from './utils';
import { buildCallbackName } from '../../../utils/CallbackName';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', DomMarker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
]);

export default class RBMap {
  #dom;
  #map;
  #mapView;
  #mapFeature;

  static #buildMap(dom, options) {
    const map = new BMap.Map(dom);
    map.enableScrollWheelZoom();
    map.enableContinuousZoom();
    map.highResolutionEnabled();

    const { center, zoom } = options;
    map.centerAndZoom(
      PositionToPoint(center) || new BMap.Point(116.331398,39.897445),
      zoom || 11);
    if (!center) {
      const cityLocator = new BMap.LocalCity();
      cityLocator.get(result => {
        setTimeout(() => map.setCenter(result.name), 500);
      });
    }
    return map;
  }

  constructor(dom, options) {
    this.#dom = dom;
    this.#map = RBMap.#buildMap(dom, options);
    this.#mapView = new MapView(this.#map);
    this.#mapFeature = new MapFeature(this.#map);
  }

  static async loadMap(dom, options) {
    return new RBMap(dom, options);
  }

  static get AsyncLoad() {
    return true;
  }

  static buildScriptTag(mapKey) {
    return [
      `//api.map.baidu.com/api?v=3.0&ak=${mapKey}&callback=${buildCallbackName(this.name)}`
    ];
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
