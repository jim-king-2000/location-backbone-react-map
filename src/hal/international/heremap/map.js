import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { InfoWindow } from './infoWindow';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', DomMarker],
  ['Polyline', Polyline],
  ['InfoWindow', InfoWindow],
]);

export class RHereMap {
  constructor(dom, options, mapKey) {
    const platform = new H.service.Platform({
      apikey: mapKey
    });
    const defaultLayers = platform.createDefaultLayers();
    this.map = new H.Map(dom, defaultLayers.vector.normal.map, {
      pixelRatio: devicePixelRatio || 1,
      center: { lat: 31, lng: 121 },
      zoom: 11,
    });
    new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
  }

  static async loadMap(dom, options, mapKey) {
    return new RHereMap(dom, options, mapKey);
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return [
      '//js.api.here.com/v3/3.1/mapsjs-core.js',
      '//js.api.here.com/v3/3.1/mapsjs-service.js',
      '//js.api.here.com/v3/3.1/mapsjs-ui.js',
      '//js.api.here.com/v3/3.1/mapsjs-mapevents.js'
    ];
  }

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}