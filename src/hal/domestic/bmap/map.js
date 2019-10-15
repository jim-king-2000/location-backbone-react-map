import { Marker } from './marker';
import { Polyline } from './polyline';
import { PositionToPoint } from './utils';

export class BMap {
  constructor(dom, options) {
    this.map = new window.BMap.Map(dom, {
      enableHighResolution: true
    });
    this.map.enableScrollWheelZoom();
    this.map.enableContinuousZoom();
    this.map.highResolutionEnabled();
    this.map.centerAndZoom(
      PositionToPoint(options.center),
      options.zoom
    );
  }

  static get LoadType() {
    return {
      async: true,
      startup: 'initializeBMap'
    }
  }

  static buildScriptTag(mapKey) {
    return [`//api.map.baidu.com/api?v=3.0&ak=${mapKey}&callback=${this.LoadType.startup}`];
  }

  addMarker(position, options) {
    return new Marker(this.map, position, options);
  }

  addPolyline(path, options) {
    return new Polyline(this.map, path, options);
  }
}