import { PositionToLatLng } from './utils';
import { renderToDiv } from '../../../utils/Render';

export class InfoWindow {
  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.infoWindow = new H.ui.InfoBubble(PositionToLatLng(position), {
      content: renderToDiv(children),
    });
    ui.addBubble(this.infoWindow);

    // events && Object.entries(events).forEach(
    //   ([key, value]) => this.infoWindow.on(key, value)
    // );
  }

  setOptions(options) {
    const { position, children } = options;
    this.infoWindow.setLngLat(PositionToLatLng(position));
    this.infoWindow.setDOMContent(renderToDiv(children));
  }

  remove() {
    this.infoWindow && this.infoWindow.remove();
  }
}