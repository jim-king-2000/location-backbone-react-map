// 高德地图
export class AMap {
  constructor(dom) {
    this.map = new window.AMap.Map(dom);
  }

  static buildScriptTag(mapKey) {
    return `//webapi.amap.com/maps?v=1.4.15&key=${mapKey}&callback=initialize`;
  }
}