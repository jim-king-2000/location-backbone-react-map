
function PositionToLngLat(position) {
  return new window.AMap.LngLat(position.longitude, position.latitude);
}

export class Marker {
  constructor(map, position, options) {
    this.marker = new window.AMap.Marker({
      map,
      ...options,
      position: PositionToLngLat(position)
    });
  }

  setPosition(position) {
    this.marker.setPosition(PositionToLngLat(position));
  }

  setAngle(angle) {
    this.marker.setAngle(angle);
  }

  setTitle(title) {
    this.marker.setTitle(title);
  }

  remove() {
    this.marker.setMap();
  }
}