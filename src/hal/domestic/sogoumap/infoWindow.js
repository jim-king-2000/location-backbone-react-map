import { PositionToLatLng } from './utils';
import { renderToStaticMarkup } from 'react-dom/server';

export class InfoWindow {
  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.infoWindow = new sogou.maps.InfoWindow({
      ...others,
      position: PositionToLatLng(position),
      content: renderToStaticMarkup(children),
    });
    this.infoWindow.open(map);
    events && Object.entries(events).forEach(
      ([key, value]) => sogou.maps.event.addListener(this.infoWindow, key, value)
    );
  }

  setOptions(options) {
    const { position, children } = options;
    this.infoWindow.setOptions({
      position: PositionToLatLng(position),
      content: renderToStaticMarkup(children),
    });
  }

  remove() {
    this.infoWindow && this.infoWindow.close();
  }
}