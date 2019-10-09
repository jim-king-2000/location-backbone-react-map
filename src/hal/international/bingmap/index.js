
export class BingMap {
  constructor(dom) {
    this.map = new Microsoft.Maps.Map(dom, {
      setMkt: 'zh-CN'
    });
  }

  static get LoadType() {
    return {
      async: true,
      startup: 'initializeBingMap'
    }
  }

  static buildScriptTag(mapKey) {
    return [`//cn.bing.com/api/maps/mapcontrol?key=${mapKey}&callback=${this.LoadType.startup}`];
  }
}