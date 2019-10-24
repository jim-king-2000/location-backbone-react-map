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

export class RBMap {
  #map;
  #mapView;
  #mapFeature;

  constructor(dom, options) {
    this.#map = new BMap.Map(dom);
    this.#map.enableScrollWheelZoom();
    this.#map.enableContinuousZoom();
    this.#map.highResolutionEnabled();
    const { center, zoom } = options;
    if (center) {
      this.#map.centerAndZoom(PositionToPoint(center), zoom);
    } else {
      const cityLocator = new BMap.LocalCity();
      cityLocator.get(city => this.#this.map.setCenter(city));
    }
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
      `//api.map.baidu.com/api?v=3.0&ak=${mapKey}&
        callback=${buildCallbackName(this.name)}`,
      '//api.map.baidu.com/library/InfoBox/1.2/src/InfoBox_min.js'
    ];
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