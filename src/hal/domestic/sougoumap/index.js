// 搜狗地图
export class SougouMap {
  constructor(dom) {
    this.map = new window.sogou.maps.Map(dom, {
      hdMap: true,
    });
  }

  static callbackName() {
    return 'initializeSougouMap';
  }

  static buildScriptTag() {
    return '//api.map.sogou.com/maps/js/api_v2.5.1.js';
  }
}