import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

export class Marker {
  constructor(map, position, options) {
    this.marker = new mapboxgl.Marker()
      .setLngLat([position.longitude, position.latitude])
      .addTo(map);
  }

  setPosition(position) {
    this.marker.setLngLat([position.longitude, position.latitude]);
  }

  setAngle(angle) {
    // this.marker.setAngle(angle);
  }

  setTitle(title) {
    // this.marker.setTitle(title);
  }

  remove() {
    this.marker.remove();
  }
}