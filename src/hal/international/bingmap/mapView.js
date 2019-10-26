import { PositionToLocation } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.setView({ zoom: map.getZoom() - 1 });
    this.zoomIn = () => map.setView({ zoom: map.getZoom() + 1 });
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