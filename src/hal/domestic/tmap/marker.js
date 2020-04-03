import { v4 as uuidv4 } from 'uuid';

function PositionToLatLng(position) {
  return new TMap.LatLng(position.latitude, position.longitude);
}

export class Marker {
  constructor(map, position, options) {
    this.id = uuidv4();
    this.marker = new TMap.MultiMarker({
      map,
      geometries: [{
        id: this.id,
        position: PositionToLatLng(position),
        properties: options
      }]
    });
  }

  setPosition(position) {
    this.marker.updateGeometries([{
      id: this.id,
      position: PositionToLatLng(position)
    }]);
  }

  setAngle(angle) {
    // this.marker.updateGeometries([{
    //   id: this.id,
    //   properties: { angle }
    // }]);
  }

  setTitle(title) {
    // this.marker.updateGeometries([{
    //   id: this.id,
    //   properties: { title }
    // }]);
  }

  remove() {
    this.marker.remove(this.id);
  }
}