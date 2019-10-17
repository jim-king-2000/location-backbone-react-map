import { Marker } from './marker';
import { DomMarker } from './domMarker';
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
    return new DomMarker(this.map, options);
  }
  
  addMarker(options) {
    return new Marker(this.map, options);
  }

  addPolyline(options) {
    return new Polyline(this.map, options);
  }
}