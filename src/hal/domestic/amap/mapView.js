import { PositionToLngLat } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();
    this.zoomIn = () => map.zoomIn();
    this.setFitView = () => map.setFitView();
    this.isInView = things => {
      const bounds = this.map.getBounds();
      return things.filter(p => p && p.latitude && p.longitude)
        .every(p => bounds.contains(PositionToLngLat(p)));
    };
  }
}