import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { PositionToLatLng } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', DomMarker],
  ['Polyline', Polyline],
]);

export class RQQMap {
  constructor(dom, options) {
    this.map = new qq.maps.Map(dom, {
      zoom: options.zoom,
      center: PositionToLatLng(options.center),
      mapTypeControl: false,
      panControl: false,
      zoomControl: false,
      scaleControl: false,
    });
  }

  static async loadMap(dom, options) {
    return new RQQMap(dom, options);
  }

  static get LoadType() {
    return {
      async: true,
      startup: 'initializeRQQMap'
    }
  }

  static buildScriptTag(mapKey) {
    return [`//map.qq.com/api/js?v=2.exp&key=${mapKey}&callback=${this.LoadType.startup}`];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}