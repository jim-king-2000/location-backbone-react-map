import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';
import { PositionToLatLng } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', DomMarker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
]);

export default class RHereMap {
  constructor(dom, options, mapKey) {
    const platform = new H.service.Platform({
      apikey: mapKey
    });
    const defaultLayers = platform.createDefaultLayers();
    const { center = { lat: 31, lng: 121 }, zoom = 11,
      pixelRatio = devicePixelRatio || 1, ...others } = options;
    this.map = new H.Map(dom, defaultLayers.vector.normal.map, {
      center: PositionToLatLng(center),
      pixelRatio,
      zoom,
      ...others,
    });
    new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
  }

  static async loadMap(dom, options, mapKey) {
    return new RHereMap(dom, options, mapKey);
  }

  static buildScriptTag() {
    return [
      '//js.api.here.com/v3/3.1/mapsjs-core.js',
      '//js.api.here.com/v3/3.1/mapsjs-service.js',
      '//js.api.here.com/v3/3.1/mapsjs-ui.js',
      '//js.api.here.com/v3/3.1/mapsjs-mapevents.js'
    ];
  }

  static buildCssTag() {
    return '//js.api.here.com/v3/3.1/mapsjs-ui.css';
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options, this.ui);
  }
}
