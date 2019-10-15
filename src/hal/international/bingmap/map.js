import { Marker } from './marker';
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

  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }

  addPolyline(path, options) {
    return new Polyline(this.map, path, options);
  }
}