import { Marker } from './marker';
import { Polyline } from './polyline';
import { PositionToLatLng } from './utils';

export class QQMap {
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

  static get LoadType() {
    return {
      async: true,
      startup: 'initializeQQMap'
    }
  }

  static buildScriptTag(mapKey) {
    return [`//map.qq.com/api/js?v=2.exp&key=${mapKey}&callback=${this.LoadType.startup}`];
  }

  addDomMarker(options) {
    return new Marker(this.map, options);
  }
  
  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }

  addPolyline(path, options) {
    return new Polyline(this.map, path, options);
  }
}