import { Marker } from './marker';
import { Polyline } from './polyline';
import { PositionToLatLng } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['Polyline', Polyline],
]);

export class RSogouMap {
  constructor(dom, options) {
    this.map = new sogou.maps.Map(dom, {
      hdMap: true,
      center: PositionToLatLng(options.center),
      zoom: options.zoom,
      mapControlType: 4,
    });
  }

  static async loadMap(dom, options) {
    return new RSogouMap(dom, options);
  }

  static callbackName() {
    return 'initializeRSougouMap';
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return ['//api.map.sogou.com/maps/js/api_v2.5.1.js'];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}