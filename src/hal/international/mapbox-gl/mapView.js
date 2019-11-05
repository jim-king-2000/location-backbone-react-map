import { LngLatBounds } from 'mapbox-gl/dist/mapbox-gl.js';
import { PositionToLngLat } from './utils';

const inBounds = function (bounds, lnglat) {
  let lng;

  const multLng = (lnglat[0] - bounds['_ne']['lng']) * (lnglat[0] - bounds['_sw']['lng']);
  if (bounds['_ne']['lng'] > bounds['_sw']['lng']) {
      lng = multLng < 0;
  } else {
      lng = multLng > 0;
  }

  const lat = (lnglat[1] - bounds['_ne']['lat']) * (lnglat[1] - bounds['_sw']['lat']) < 0;
  return lng && lat;
};

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
      return things.every(p => inBounds(bounds, PositionToLngLat(p)));
    };
  }
}