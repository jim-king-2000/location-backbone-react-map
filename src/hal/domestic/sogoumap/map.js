import { Marker } from './marker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';
import { PositionToLatLng } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
]);

export default class RSogouMap {
  constructor(dom, options) {
    const { center, mapControlType = 4, hdMap = true, ...others } = options;
    this.map = new sogou.maps.Map(dom, {
      center: PositionToLatLng(center),
      hdMap,
      mapControlType,
      ...others,
    });
  }

  static async loadMap(dom, options) {
    return new RSogouMap(dom, options);
  }

  static callbackName() {
    return 'initializeRSougouMap';
  }

  static buildScriptTag() {
    return ['//api.map.sogou.com/maps/js/api_v2.5.1.js'];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}
