import { PositionToLngLat } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();
    this.zoomIn = () => map.zoomIn();
    this.setFitView = () => map.setFitView();
    this.isInView = things => {
      const bounds = map.getBounds();
      return things.every(p => bounds.contains(PositionToLngLat(p)));
    };
  }
}