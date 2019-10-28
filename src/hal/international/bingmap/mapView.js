import { PositionToLocation } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.setView({ zoom: map.getZoom() - 1 });
    this.zoomIn = () => map.setView({ zoom: map.getZoom() + 1 });
    this.setFitView = positions => {
      const locations = positions.map(p => PositionToLocation(p));
      if (!Array.isArray(locations) || locations.length < 1) return;
      const bounds = Microsoft.Maps.LocationRect.fromLocations(locations);
      map.setView({ bounds });
    };
    this.isInView = things => {
      const bounds = map.getBounds();
      return things.every(p => bounds.contains(PositionToLocation(p)));
    };
  }
}