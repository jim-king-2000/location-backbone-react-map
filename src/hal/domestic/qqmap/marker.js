
function PositionToLatLng(position) {
  return new qq.maps.LatLng(position.latitude, position.longitude);
}

function translateProperties(options) {
  const { angle, ...others } = options;
  return {
    rotation: angle,
    ...others
  };
}

export class Marker {
  constructor(map, position, options) {
    this.marker = new qq.maps.Marker({
      map,
      flat: true,
      ...translateProperties(options),
      position: PositionToLatLng(position),
    });
  }

  setPosition(position) {
    this.marker.setPosition(PositionToLatLng(position));
  }

  setAngle(angle) {
    this.marker.setRotation(angle);
  }

  setTitle(title) {
    this.marker.setTitle(title);
  }

  remove() {
    this.marker.setMap(null);
  }
}