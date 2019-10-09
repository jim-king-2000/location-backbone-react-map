
export class BingMap {
  constructor(dom) {
    this.map = new window.Microsoft.Maps.Map(dom);
  }

  static callbackName() {
    return 'initializeBingMap';
  }

  static buildScriptTag(mapKey) {
    return `//cn.bing.com/api/maps/mapcontrol?key=${mapKey}&callback=${BingMap.callbackName()}`;
  }
}