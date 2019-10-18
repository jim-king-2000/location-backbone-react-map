import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { PositionToLngLat } from './utils';
import { renderToDiv } from '../../../utils/Render';
import { buildSVGElement } from '../../../utils/svg';

export class Marker {
  constructor(map, options) {
    const { position, angle, svgIcon, children, ...others } = options;
    const div = document.createElement('div');
    if (children) {
      const content = renderToDiv(children);
      if (angle) content.style.transform = `rotate(${angle}deg)`;
      div.appendChild(content);
      this.iconContainer = content;
    } else if (svgIcon) {
      const content = renderToDiv(buildSVGElement(options));
      if (angle) content.style.transform = `rotate(${angle}deg)`;
      div.appendChild(content);
      this.iconContainer = content;
    }

    this.marker = new mapboxgl.Marker(this.iconContainer && div)
      .setLngLat(PositionToLngLat(position))
      .addTo(map);
  }

  setPosition(position) {
    this.marker.setLngLat(PositionToLngLat(position));
  }

  setOptions(options) {
    if (!this.iconContainer) return;
    this.iconContainer.style.transform = `rotate(${options.angle}deg)`;
  }

  remove() {
    this.marker.remove();
  }
}