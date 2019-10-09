
export class GoogleMap {
  constructor(dom) {
    this.map = new window.google.maps.Map(dom, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  static callbackName() {
    return 'initializeGoogleMap';
  }

  static buildScriptTag(mapKey) {
    return `//maps.google.cn/maps/api/js?key=${mapKey}&callback=${GoogleMap.callbackName()}`;
  }
}