import { PositionToPoint } from './utils';
import { renderToDiv } from '../../../utils/Render';

export class InfoWindow {
  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.infoWindow = new BMap.InfoWindow(renderToDiv(children));
    map.openInfoWindow(this.infoWindow, PositionToPoint(position));
    events && Object.entries(events).forEach(
      ([key, value]) => this.infoWindow.addEventListener(key, value)
    );
    this.map = map;
  }

  setOptions(options) {
    const { position, children } = options;
    this.infoWindow.setContent(renderToDiv(children));
  }

  remove() {
    this.map && this.map.closeInfoWindow();
  }
}