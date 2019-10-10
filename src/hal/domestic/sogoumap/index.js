// 搜狗地图
export class SogouMap {
  constructor(dom) {
    this.map = new sogou.maps.Map(dom, {
      hdMap: true,
      center: new sogou.maps.LatLng(31,121),
      zoom: 11,
    });
  }

  static callbackName() {
    return 'initializeSougouMap';
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return ['//api.map.sogou.com/maps/js/api_v2.5.1.js'];
  }
}