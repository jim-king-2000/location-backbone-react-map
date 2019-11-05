import { PositionToLngLat } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();

    this.zoomIn = () => map.zoomIn();

    this.setFitView = positions => {
      if (!Array.isArray(positions)) return;

      // if (positions.length === 1) map.panTo(PositionToLngLat(positions[0]));

      map.setFitView();
    };

    this.isInView = things => {
      const bounds = map.getBounds();
      return things.every(p => bounds.contains(PositionToLngLat(p)));
    };
  }
}