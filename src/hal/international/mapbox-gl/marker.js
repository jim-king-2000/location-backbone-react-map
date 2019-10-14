import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import ReactDOM from 'react-dom';

export class Marker {
  constructor(map, position, options) {
    this.iconContainer = document.createElement('div');
    ReactDOM.render((
      <svg
        preserveAspectRatio='xMidYMid meet'
        fontSize={options.size || 30}
        fill={options.fill || 'currentColor'}
        viewBox='0 0 47.032 47.032'
        width='30px'
        height='30px'
      >
        <g>
          <path d={options.svgIcon} />
        </g>
      </svg>
    ), this.iconContainer);
    this.marker = new mapboxgl.Marker(this.iconContainer, {
      rotation: options.angle
    }).setLngLat([position.longitude, position.latitude])
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