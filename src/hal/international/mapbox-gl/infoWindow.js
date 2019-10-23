import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { PositionToLngLat } from './utils';
import { renderToDiv } from '../../../utils/Render';

export class InfoWindow {
  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.infoWindow = new mapboxgl.Popup({
      ...others,
    }).setLngLat(PositionToLngLat(position))
    .setDOMContent(renderToDiv(children))
    .addTo(map);

    events && Object.entries(events).forEach(
      ([key, value]) => this.infoWindow.on(key, value)
    );
  }

  setOptions(options) {
    const { position, children } = options;
    this.infoWindow.setLngLat(PositionToLngLat(position));
    this.infoWindow.setDOMContent(renderToDiv(children));
  }

  remove() {
    this.infoWindow && this.infoWindow.remove();
  }
}