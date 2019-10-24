import { PositionToPoint } from './utils';

export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();
    this.zoomIn = () => map.zoomIn();
    this.setFitView = () => map.setViewport(
      map.getOverlays().map(
        o => {
          console.log(o)
          // It is a workaround of a bug of Baidu Map API. It creates an overlay
          // whose name is 'TANGRAM__2c' when InfoWindow is created. And it keeps
          // alive even when InfoWindow is closed. We have to exclude this overlay
          // when we run setFitView.
          if (o.ea === 'TANGRAM__2c')
            return [];
  
          // For CustomOverlay in react-bmap.
          if (o._point)
            return o._point;
  
          if (o.getPosition)
            return o.getPosition();
          
          if (o.getBounds)
            return [o.getBounds().getSouthWest(), o.getBounds().getNorthEast()];
          
          return [];
        }).flat());
    this.isInView = things => {
      const bounds = map.getBounds();
    return things.filter(p => p.latitude && p.longitude)
      .every(p => bounds.containsPoint(PositionToPoint(p)));
    };
  }
}