// 腾讯地图
export class TMap {
  constructor(dom) {
    this.map = new window.TMap.Map(dom);
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag(mapKey) {
    return [`//map.qq.com/api/gljs?v=2.exp&key=${mapKey}`];
  }
}