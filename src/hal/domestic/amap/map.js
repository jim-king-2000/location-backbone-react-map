import { Marker } from './marker';
import { Polyline } from './polyline';
import { PositionToLngLat } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', Marker],
  ['Polyline', Polyline],
]);

export class RAMap {
  constructor(dom, options) {
    this.map = new AMap.Map(dom, {
      zoom: options.zoom,
      center: PositionToLngLat(options.center),
    });
  }

  static async loadMap(dom, options) {
    return new RAMap(dom, options);
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag(mapKey) {
    return [
      `//webapi.amap.com/maps?v=1.4.15&key=${mapKey}`,
      '//webapi.amap.com/ui/1.0/main.js?v=1.0.11'
    ];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}