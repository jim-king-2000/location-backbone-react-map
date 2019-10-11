import { Marker } from './marker';

export class TianMap {
  constructor(dom) {
    this.map = new T.Map(dom, {
      center: new T.LngLat(121, 31),
      zoom: 11,
    });
  }

  static get LoadType() {
    return { async: false }
  }
  
  static buildScriptTag(mapKey) {
    return [`http://api.tianditu.gov.cn/api?v=4.0&tk=${mapKey}`];
  }

  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }
}