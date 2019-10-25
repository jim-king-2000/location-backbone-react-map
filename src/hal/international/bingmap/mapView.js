import { PositionToLocation } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();
    this.zoomIn = () => map.zoomIn();
    this.setFitView = () => {
      const overlays = map.entities;
      const bounds = Microsoft.Maps.SpatialMath.Geometry.bounds(overlay);
      map.setView({ bounds });
    };
    this.isInView = things => {
      const bounds = map.getBounds();
      return things.every(p => bounds.contains(PositionToLocation(p)));
    };
  }
}