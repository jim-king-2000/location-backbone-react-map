import { Marker } from './marker';
import { Polyline } from './polyline';
import { PositionToLngLat } from './utils';

export class AMap {
  constructor(dom, options) {
    this.map = new window.AMap.Map(dom, {
      zoom: options.zoom,
      center: PositionToLngLat(options.center),
    });
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

  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }

  addPolyline(path, options) {
    return new Polyline(this.map, path, options);
  }
}