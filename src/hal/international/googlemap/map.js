import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { PositionToLatLng } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', DomMarker],
  ['Polyline', Polyline],
]);

export class RGoogleMap {
  constructor(dom, options) {
    this.map = new google.maps.Map(dom, {
      center: PositionToLatLng(options.center),
      zoom: options.zoom,
      disableDefaultUI: true,
    });
  }

  static async loadMap(dom, options) {
    return new RGoogleMap(dom, options);
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag(mapKey) {
    return [`//maps.google.cn/maps/api/js?key=${mapKey}`];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}