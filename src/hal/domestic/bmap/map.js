import { Marker } from './marker';
import { DomMarker } from './domMarker';
import { Polyline } from './polyline';
import { PositionToPoint } from './utils';

const OverlayClasses = new Map([
  ['Marker', Marker],
  ['DomMarker', DomMarker],
  ['Polyline', Polyline],
]);

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

  addOverlay(overlayType, options) {
    const OverlayClass = OverlayClasses.get(overlayType);
    return OverlayClass && new OverlayClass(this.map, options);
  }
}