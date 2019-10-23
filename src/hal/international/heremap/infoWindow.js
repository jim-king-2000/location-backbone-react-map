import { PositionToLatLng } from './utils';
import { renderToDiv } from '../../../utils/Render';

export class InfoWindow {
  constructor(map, options, ui) {
    const { position, events, children, ...others } = options;
    this.infoWindow = new H.ui.InfoBubble(PositionToLatLng(position), {
      ...others,
      content: renderToDiv(children),
    });
    ui.addBubble(this.infoWindow);
    this.infoWindow.close = events.close;
    this.ui = ui;
  }

  setOptions(options) {
    const { position, children } = options;
    this.infoWindow.setPosition(PositionToLatLng(position));
    this.infoWindow.setContent(renderToDiv(children));
  }

  remove() {
    this.infoWindow && this.ui.removeBubble(this.infoWindow);
  }
}