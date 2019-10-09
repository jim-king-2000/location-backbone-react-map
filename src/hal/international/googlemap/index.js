
export class GoogleMap {
  constructor(dom) {
    this.map = new window.google.maps.Map(dom, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  static buildScriptTag(mapKey) {
    return `//maps.googleapis.com/maps/api/js?key=${mapKey}&callback=initialize`;
  }
}