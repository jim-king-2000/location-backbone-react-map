import { Marker } from './marker';
import { Polyline } from './polyline';

export class HereMap {
  constructor(dom, options, mapKey) {
    const platform = new H.service.Platform({
      apikey: mapKey
    });
    const maptypes = platform.createDefaultLayers();
    this.map = new H.Map(dom, maptypes.vector.normal.map, {
      pixelRatio: window.devicePixelRatio || 1,
      center: { lat: 31, lng: 121 },
      zoom: 11,
    });
    new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
  }

  static get LoadType() {
    return { async: false }
  }

  static buildScriptTag() {
    return [
      '//js.api.here.com/v3/3.1/mapsjs-core.js',
      '//js.api.here.com/v3/3.1/mapsjs-service.js',
      '//js.api.here.com/v3/3.1/mapsjs-mapevents.js'
    ];
  }

  addMarker(options) {
    return new Marker(this.map, options);
  }

  addPolyline(options) {
    return new Polyline(this.map, options);
  }
}