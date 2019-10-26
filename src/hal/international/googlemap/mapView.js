import { PositionToLatLng } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();
    this.zoomIn = () => map.zoomIn();
    this.setFitView = positions => {
      const bounds = new google.maps.LatLngBounds();
      positions.forEach(p => bounds.extend(PositionToLatLng(p)));
      map.fitBounds(bounds);
    };
    this.isInView = things => {
      const bounds = map.getBounds();
      return things.every(p => bounds.contains(PositionToLatLng(p)));
    };
  }
}