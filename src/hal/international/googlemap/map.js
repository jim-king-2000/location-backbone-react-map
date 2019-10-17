import { Marker } from './marker';
import { Polyline } from './polyline';
import { PositionToLatLng } from './utils';

export class GoogleMap {
  constructor(dom, options) {
    this.map = new google.maps.Map(dom, {
      center: PositionToLatLng(options.center),
      zoom: options.zoom,
      disableDefaultUI: true,
    });
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag(mapKey) {
    return [`//maps.google.cn/maps/api/js?key=${mapKey}`];
  }

  addMarker(options) {
    return new Marker(this.map, options);
  }

  addPolyline(options) {
    return new Polyline(this.map, options);
  }
}