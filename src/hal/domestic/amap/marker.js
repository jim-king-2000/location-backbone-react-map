export class Marker {
  constructor(map, position, options) {
    this.map = map;
    this.marker = new window.AMap.Marker({
      map,
      ...options,
      position: new window.AMap.LngLat(position.longitude, position.latitude)
    });
  }

  setPosition(position) {
    this.marker.setPosition(
      new window.AMap.LngLat(position.longitude, position.latitude)
    );
  }

  setAngle(angle) {
    this.marker.setAngle(angle);
  }

  setTitle(title) {
    this.marker.setTitle(title);
  }

  remove() {
    this.map.remove(this.marker);
  }
}