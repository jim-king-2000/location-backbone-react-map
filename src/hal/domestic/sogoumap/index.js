// 搜狗地图
export class SogouMap {
  constructor(dom) {
    this.map = new sogou.maps.Map(dom, {
      hdMap: true,
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