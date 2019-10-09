
export class GoogleMap {
  constructor(dom) {
    this.map = new google.maps.Map(dom, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag(mapKey) {
    return [`//maps.google.cn/maps/api/js?key=${mapKey}`];
  }
}