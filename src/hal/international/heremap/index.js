
export class HereMap {
  constructor(dom) {
    const platform = new H.service.Platform({
      apikey: 'oSDd-lyooghz4RTOMVFHpU8Kk2swTJ7i_cZGcbv1ulc'
    });
    const maptypes = platform.createDefaultLayers();
    this.map = new H.Map(dom, maptypes.vector.normal.map);
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return [
      '//js.api.here.com/v3/3.1/mapsjs-core.js',
      '//js.api.here.com/v3/3.1/mapsjs-service.js'
    ];
  }
}