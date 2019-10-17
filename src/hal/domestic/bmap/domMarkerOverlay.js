import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends window.BMap.Overlay {
  constructor(position, options) {
    super();
    const DomOverlay = buildDomOverlay(
      (div, map) => map.getPanes().markerPane.appendChild(div),
      (position, map) => map.pointToOverlayPixel(position)
    );
    this.DomMarkerOverlay_ = new DomOverlay(position, options);
  }

  initialize(map) {
    return this.DomMarkerOverlay_.onAdd(map);
  }

  draw() {
    return this.DomMarkerOverlay_.draw();
  }
}
