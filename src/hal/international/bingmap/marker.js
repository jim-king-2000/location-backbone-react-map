
function PositionToLocation(position) {
  return new Microsoft.Maps.Location(position.latitude, position.longitude);
}

export class Marker {
  constructor(map, position, options) {
    this.marker = new Microsoft.Maps.Pushpin(PositionToLocation(position), {
      ...options,
    });
    map.entities.push(this.marker);
    this.map = map;
  }

  setPosition(position) {
    this.marker.setLocation(PositionToLocation(position));
  }

  setAngle(angle) {
    // this.marker.setAngle(angle);
  }

  setTitle(title) {
    this.marker.setOptions({ title });
  }

  remove() {
    this.map.entities.remove(this.marker);
  }
}