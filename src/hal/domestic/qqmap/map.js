import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';
import { PositionToLatLng } from './utils';
import { buildCallbackName } from '../../../utils/CallbackName';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', DomMarker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
]);

export default class RQQMap {
  constructor(dom, options) {
    const { center = { latitude: 39.915, longitude: 116.404 },
      mapTypeControl = false, panControl = false,
      zoomControl = false, scaleControl = false, ...others } = options;
    this.map = new qq.maps.Map(dom, {
      center: PositionToLatLng(center),
      mapTypeControl: mapTypeControl,
      panControl: panControl,
      zoomControl: zoomControl,
      scaleControl: scaleControl,
      ...others,
    });
  }

  static async loadMap(dom, options) {
    return new RQQMap(dom, options);
  }

  static get AsyncLoad() {
    return true;
  }

  static buildScriptTag(mapKey) {
    return [`//map.qq.com/api/js?v=2.exp&key=${mapKey}&callback=${buildCallbackName(this.name)}`];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}
