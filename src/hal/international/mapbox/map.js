import { Marker } from './marker';
import { Polyline } from './polyline';
import { PositionToLatLng } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['Polyline', Polyline],
]);

export class RMapBox {
  constructor(dom, options, mapKey) {
    L.mapbox.accessToken = mapKey;
    this.map = L.mapbox.map(dom)
      .setView(PositionToLatLng(options.center), options.zoom)
      .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return ['//api.mapbox.com/mapbox.js/v3.2.1/mapbox.js'];
  }

  static buildCssTag() {
    return '//api.mapbox.com/mapbox.js/v3.2.1/mapbox.css';
  }
  
  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}