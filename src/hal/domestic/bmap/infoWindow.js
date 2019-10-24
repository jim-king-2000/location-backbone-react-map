import { PositionToPoint } from './utils';
import { renderToDiv } from '../../../utils/Render';

export class InfoWindow {
  #map;
  #infoWindow;

  constructor(map, options) {
    const { position, events, children } = options;
    this.#infoWindow = new BMap.InfoWindow(renderToDiv(children));
    events && Object.entries(events).forEach(
      ([key, value]) => this.#infoWindow.addEventListener(key, value)
    );
    map.openInfoWindow(this.#infoWindow, PositionToPoint(position));
    this.#map = map;
  }

  setOptions(options) {
    if (!this.#infoWindow) return;
    const { position, children } = options;
    this.#infoWindow.setContent(renderToDiv(children));
  }

  remove() {
    this.#map && this.#map.closeInfoWindow();
  }
}