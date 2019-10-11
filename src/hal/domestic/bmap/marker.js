
function PositionToPoint(position) {
  return new window.BMap.Point(position.longitude, position.latitude);
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
    this.map = map;
    this.marker = new window.BMap.Marker(
      PositionToPoint(position),
      translateProperties(options)
    );
    map.addOverlay(this.marker);
  }

  setPosition(position) {
    this.marker.setPosition(PositionToPoint(position));
  }

  setAngle(angle) {
    this.marker.setRotation(angle);
  }

  setTitle(title) {
    this.marker.setTitle(title);
  }

  remove() {
    this.map.removeOverlay(this.marker);
  }
}