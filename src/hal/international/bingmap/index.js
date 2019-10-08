
export class BingMap {
  constructor(dom) {
    this.map = new window.Microsoft.Maps.Map(dom);
  }

  static buildScriptTag(mapKey) {
    return `//cn.bing.com/api/maps/mapcontrol?key=${mapKey}&callback=initialize`;
  }
}