// 腾讯地图
export class TMap {
  constructor(dom) {
    this.map = new window.TMap.Map(dom);
  }

  static callbackName() {
    return 'initializeTMap';
  }

  static buildScriptTag(mapKey) {
    return `//map.qq.com/api/gljs?v=1.exp&key=${mapKey}&callback=${TMap.callbackName()}`;
  }
}