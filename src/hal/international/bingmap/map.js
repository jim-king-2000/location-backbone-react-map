import { Marker } from './marker';
import { Polyline } from './polyline';

export class BingMap {
  constructor(dom) {
    this.map = new Microsoft.Maps.Map(dom, {
      enableHighDpi: true,
      zoom: 11,
      center: new Microsoft.Maps.Location(31, 121),
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