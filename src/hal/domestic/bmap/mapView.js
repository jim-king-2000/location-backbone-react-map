import { PositionToPoint } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();
    this.zoomIn = () => map.zoomIn();
    this.setFitView = positions => map.setViewport(
      positions.map(p => PositionToPoint(p)), {
        margins: [35, 35, 35, 35]
      }
    );
    this.isInView = positions => {
      const bounds = map.getBounds();
      return positions.every(p => bounds.containsPoint(PositionToPoint(p)));
    };
  }
}