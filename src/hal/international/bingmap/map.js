import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { PositionToLocation } from './utils';

export class BingMap {
  constructor(dom, options) {
    this.map = new Microsoft.Maps.Map(dom, {
      enableHighDpi: true,
      zoom: options.zoom,
      center: PositionToLocation(options.center),
    });
  }

  static get LoadType() {
    return {
      async: true,
      startup: 'initializeBingMap'
    }
  }

  static buildScriptTag(mapKey) {
    return [`//cn.bing.com/api/maps/mapcontrol?key=${mapKey}&callback=${this.LoadType.startup}&setMkt=zh-CN&setLang=zh`];
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