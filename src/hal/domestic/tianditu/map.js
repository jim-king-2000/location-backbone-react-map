import { Marker } from './marker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';
import { PositionToLngLat } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
]);

export default class RTianMap {
  constructor(dom, options) {
    const { center = { latitude: 39.915, longitude: 116.404 },
      zoom = 11, ...others } = options;
    this.map = new T.Map(dom, {
      center: PositionToLngLat(center),
      zoom,
      ...others,
    });
  }

  static async loadMap(dom, options) {
    return new RTianMap(dom, options);
  }

  static buildScriptTag(mapKey) {
    return [`http://api.tianditu.gov.cn/api?v=4.0&tk=${mapKey}`];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}
