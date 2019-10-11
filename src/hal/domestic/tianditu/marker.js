
function PositionToLngLat(position) {
  return new T.LngLat(position.longitude, position.latitude);
}

export class Marker {
  constructor(map, position, options) {
    this.marker = new T.Marker(PositionToLngLat(position), {
      ...options,
    });
    map.addOverLay(this.marker);
    this.map = map;
  }

  setPosition(position) {
    this.marker.setLngLat(PositionToLngLat(position));
  }

  setAngle(angle) {
    // this.marker.setAngle(angle);
  }

  setTitle(title) {
    // this.marker.setTitle(title);
  }

  remove() {
    this.map.removeOverLay(this.marker);
  }
}