import { PositionToPoint } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();
    this.zoomIn = () => map.zoomIn();
    this.setFitView = positions => map.setViewport(
      positions.filter(p => p.latitude && p.longitude)
      .map(p => PositionToPoint(p))
      );
    this.isInView = positions => {
      const bounds = map.getBounds();
      return positions.filter(p => p.latitude && p.longitude)
        .every(p => bounds.containsPoint(PositionToPoint(p)));
    };
  }
}