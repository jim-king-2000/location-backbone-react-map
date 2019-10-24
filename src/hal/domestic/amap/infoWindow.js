import { PositionToLngLat } from './utils';
import { renderToDiv } from '../../../utils/Render';

export class InfoWindow {
  #infoWindow;

  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.#infoWindow = new AMap.InfoWindow({
      ...others,
      closeWhenClickMap: true,
      content: renderToDiv(children),
    });
    events && Object.entries(events).forEach(
      ([key, value]) => this.#infoWindow.on(key, value)
    );
    this.#infoWindow.open(map, PositionToLngLat(position));
  }

  setOptions(options) {
    if (!this.#infoWindow) return;
    const { position, children } = options;
    this.#infoWindow.setContent(renderToDiv(children));
    this.#infoWindow.setPosition(PositionToLngLat(position));
  }

  remove() {
    this.#infoWindow && this.#infoWindow.close();
  }
}