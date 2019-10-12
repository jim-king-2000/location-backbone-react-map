import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

export class Polyline {
  constructor(map, path, options) {
    this.polyline = new mapboxgl.Polyline(
      path.map(position => [position.longitude, position.latitude]),
      options
    ).addTo(map);
  }

  remove() {
    this.polyline && this.polyline.remove();
  }
}