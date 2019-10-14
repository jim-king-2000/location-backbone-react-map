import { Marker } from './marker';
import { Polyline } from './polyline';

export class GoogleMap {
  constructor(dom) {
    this.map = new google.maps.Map(dom, {
      center: {lat: 31, lng: 121},
      zoom: 11
    });
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag(mapKey) {
    return [`//maps.google.cn/maps/api/js?key=${mapKey}`];
  }

  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }

  addPolyline(path, options) {
    return new Polyline(this.map, path, options);
  }
}