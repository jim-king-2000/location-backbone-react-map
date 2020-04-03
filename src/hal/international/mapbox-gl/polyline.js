import { v4 as uuidv4 } from 'uuid';
import { PositionToLngLat } from './utils';
import { transformColorToRgb } from '../../../utils/Color';

export class Polyline {
  constructor(map, options) {
    this.map = map;
    const { path, ...others } = options;
    this.id = uuidv4();
    map.addLayer({
      id: this.id,
      type: 'line',
      paint: {
        'line-width': others.strokeWeight,
        'line-color': transformColorToRgb(others.strokeColor),
        'line-opacity': others.strokeOpacity || 1,
      },
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: path.map(position => PositionToLngLat(position))
            }
          }]
        }
      }
    });
  }

  remove() {
    this.map.removeLayer(this.id);
  }
}