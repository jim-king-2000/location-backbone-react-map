import { PositionToLocation } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();
    this.zoomIn = () => map.zoomIn();
    this.setFitView = positions => {
      const bounds = Microsoft.Maps.LocationRect.fromLocations(
        positions.map(p => PositionToLocation(p))
      );
      map.setView({ bounds });
    };
    this.isInView = things => {
      const bounds = map.getBounds();
      return things.every(p => bounds.contains(PositionToLocation(p)));
    };
  }
}