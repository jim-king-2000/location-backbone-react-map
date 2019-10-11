import { Marker } from './marker';

export class TMap {
  constructor(dom) {
    this.map = new window.TMap.Map(dom, {
      zoom: 11,
      center: new window.TMap.LatLng(31, 121),
    });
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag(mapKey) {
    return [`//map.qq.com/api/gljs?v=2.exp&key=${mapKey}`];
  }

  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }
}