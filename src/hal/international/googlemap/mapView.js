import { PositionToLatLng } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.setZoom(map.getZoom() - 1);
    this.zoomIn = () => map.setZoom(map.getZoom() + 1);
    this.setFitView = positions => {
      if (!Array.isArray(positions) || positions.length < 1) {
        return;
      }
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