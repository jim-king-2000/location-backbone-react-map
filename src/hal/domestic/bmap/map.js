import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';
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

  constructor(dom, options) {
    this.#map = new BMap.Map(dom);
    this.#map.enableScrollWheelZoom();
    this.#map.enableContinuousZoom();
    this.#map.highResolutionEnabled();
    this.#map.centerAndZoom(
      PositionToPoint(options.center),
      options.zoom
    );
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
}