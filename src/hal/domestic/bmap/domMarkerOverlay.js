import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends BMap.Overlay {
  constructor(position, options) {
    super();
    const DomOverlay = buildDomOverlay(
      (position, map) => map.pointToOverlayPixel(position)
    );
    this.DomMarkerOverlay_ = new DomOverlay(position, options);
  }

  initialize(map) {
    const div = this.DomMarkerOverlay_.onAdd(map);
    map.getPanes().markerPane.appendChild(div);
    return div;
  }

  draw() {
    return this.DomMarkerOverlay_.draw();
  }
}
