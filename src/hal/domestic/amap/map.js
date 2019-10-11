import { Marker } from './marker';

export class AMap {
  constructor(dom) {
    this.map = new window.AMap.Map(dom, {
      zoom: 11,
      center: [121, 31],
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
}