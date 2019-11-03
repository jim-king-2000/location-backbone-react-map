import { LngLatBounds } from 'mapbox-gl/dist/mapbox-gl.js';
import { PositionToLngLat } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();
    this.zoomIn = () => map.zoomIn();
    this.setFitView = positions => {
      const locations = positions.map(p => PositionToLngLat(p));
      if (!Array.isArray(locations) || locations.length < 1) return;
      const bounds = new LngLatBounds();
      positions.forEach(p => bounds.extend(PositionToLngLat(p)));
      map.fitBounds(bounds);
    };
    this.isInView = things => {
      const bounds = map.getBounds();
      return things.every(p => bounds.contains(PositionToLngLat(p)));
    };
  }
}