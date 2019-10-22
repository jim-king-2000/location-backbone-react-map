
export class MapView {
  constructor(map) {
    this.zoomOut = () => map.zoomOut();
    this.zoomIn = () => map.zoomIn();
    this.setFitView = () => map.setFitView();
    this.isInView = () => {};
  }
}