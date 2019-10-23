import { PositionToLngLat } from './utils';
import { renderToStaticMarkup } from 'react-dom/server';

export class InfoWindow {
  constructor(map, options) {
    const { position, events, children, ...others } = options;
    this.infoWindow = new T.InfoWindow(renderToStaticMarkup(children), {
      ...others,
      closeOnClick: true,
      autoPan: true,
    });
    map.openInfoWindow(this.infoWindow, PositionToLngLat(position));
    events && Object.entries(events).forEach(
      ([key, value]) => this.infoWindow.addEventListener(key, value)
    );
  }

  setOptions(options) {
    const { position, children } = options;
    this.infoWindow.setLngLat(PositionToLngLat(position));
    this.infoWindow.setContent(renderToStaticMarkup(children));
  }

  remove() {
    this.infoWindow && this.infoWindow.closeInfoWindow();
  }
}