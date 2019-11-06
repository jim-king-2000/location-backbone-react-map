import { PositionToPoint } from './utils';
import { renderToDiv } from '../../../utils/Render';

export class InfoWindow {
  #map;
  #infoWindow;

  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.#infoWindow = new BMap.InfoWindow(renderToDiv(children), others);
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
    this.#infoWindow.setPosition(PositionToPoint(position));
  }

  remove() {
    this.#map && this.#map.closeInfoWindow();
  }
}