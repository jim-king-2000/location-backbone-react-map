import { Marker } from './marker';
import { Polyline } from './polyline';
import { PositionToLngLat } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['Polyline', Polyline],
]);

export class RTianMap {
  constructor(dom, options) {
    this.map = new T.Map(dom, {
      center: PositionToLngLat(options.center),
      zoom: options.zoom,
    });
  }

  static async loadMap(dom, options) {
    return new RTianMap(dom, options);
  }

  static get LoadType() {
    return { async: false }
  }
  
  static buildScriptTag(mapKey) {
    return [`http://api.tianditu.gov.cn/api?v=4.0&tk=${mapKey}`];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}