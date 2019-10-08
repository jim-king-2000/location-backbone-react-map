// 百度地图
export class BMap {
  constructor(dom) {
    this.map = new window.BMap.Map(dom);
    this.map.centerAndZoom(new window.BMap.Point(116.402544, 39.928216), 11);
  }

  static buildScriptTag(mapKey) {
    return `//api.map.baidu.com/api?v=3.0&ak=${mapKey}&callback=initialize`;
  }
}