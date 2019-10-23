import { PositionToLatLng } from './utils';
import { renderToDiv } from '../../../utils/Render';

function translateEvents(events) {
  const { close, ...otherEvents } = events;
  return {
    closeclick: close,
    ...otherEvents,
  }
}

export class InfoWindow {
  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.infoWindow = new qq.maps.InfoWindow({
      ...others,
      map,
      content: renderToDiv(children),
      position: PositionToLatLng(position)
    });
    events && Object.entries(translateEvents(events)).forEach(
      ([key, value]) => qq.maps.event.addListener(this.infoWindow, key, value)
    );
    this.infoWindow.open();
  }

  setOptions(options) {
    const { position, children } = options;
    this.infoWindow.setContent(renderToDiv(children));
    this.infoWindow.setPosition(PositionToLatLng(position));
  }

  remove() {
    this.infoWindow && this.infoWindow.close();
  }
}