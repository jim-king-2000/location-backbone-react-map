import { Marker } from './marker';
import { Polyline } from './polyline';

export class QQMap {
  constructor(dom) {
    this.map = new qq.maps.Map(dom, {
      zoom: 11,
      center: new qq.maps.LatLng(31, 121),
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

  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }

  addPolyline(path, options) {
    return new Polyline(this.map, path, options);
  }
}