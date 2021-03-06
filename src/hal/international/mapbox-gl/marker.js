import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { PositionToLngLat } from './utils';
import { renderToDiv } from '../../../utils/Render';
import { buildSVGElement } from '../../../utils/svg';

export class Marker {
  constructor(map, options) {
    const { position, angle, svgIcon, children, events, extData, ...others } = options;
    const div = document.createElement('div');
    div.style.cursor = 'pointer';
    if (children) {
      const content = renderToDiv(children);
      if (angle) content.style.transform = `rotate(${angle}deg)`;
      div.append(content);
      this.iconContainer = content;
    } else if (svgIcon) {
      const content = renderToDiv(buildSVGElement(options));
      if (angle) content.style.transform = `rotate(${angle}deg)`;
      div.append(content);
      this.iconContainer = content;
    }

    events && Object.entries(events).forEach(
      ([key, value]) => div.addEventListener(key, e => {
        e.preventDefault();
        e.stopPropagation();
        e.target.getExtData = () => extData;
        value(e);
      })
    );

    this.marker = new mapboxgl.Marker(this.iconContainer && div)
      .setLngLat(PositionToLngLat(position))
      .addTo(map);
  }

  setOptions(options) {
    if (this.iconContainer) {
      this.iconContainer.style.transform = `rotate(${options.angle}deg)`;
    }
    this.marker.setLngLat(PositionToLngLat(options.position));
  }

  remove() {
    this.marker.remove();
  }
}