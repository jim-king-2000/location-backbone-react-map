import { PositionToLatLng } from './utils';
import { renderToStaticMarkup } from 'react-dom/server';

function translateEvents(events) {
  const { close, ...otherEvents } = events;
  return {
    closeclick: close,
    ...otherEvents,
  }
}

export class InfoWindow {
  #infoWindow;

  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.#infoWindow = new google.maps.InfoWindow({
      ...others,
      content: renderToStaticMarkup(children),
      position: PositionToLatLng(position),
    });
    this.#infoWindow.open(map);
    events && Object.entries(translateEvents(events)).forEach(
      ([key, value]) => this.#infoWindow.addListener(key, value)
    );
  }

  setOptions(options) {
    const { position, children } = options;
    this.#infoWindow.setOptions({
      content: renderToStaticMarkup(children),
      position: PositionToLatLng(position),
    });
  }

  remove() {
    this.#infoWindow && this.#infoWindow.close();
  }
}