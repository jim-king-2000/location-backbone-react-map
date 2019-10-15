import { Marker } from './marker';
import { Polyline } from './polyline';
import { PositionToLngLat } from './utils';

export class TianMap {
  constructor(dom, options) {
    this.map = new T.Map(dom, {
      center: PositionToLngLat(options.center),
      zoom: options.zoom,
    });
  }

  static get LoadType() {
    return { async: false }
  }
  
  static buildScriptTag(mapKey) {
    return [`http://api.tianditu.gov.cn/api?v=4.0&tk=${mapKey}`];
  }

  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }

  addPolyline(path, options) {
    return new Polyline(this.map, path, options);
  }
}