import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends qq.maps.Overlay {
  constructor(position, options) {
    super();
    const DomOverlay = buildDomOverlay(
      position => this.getProjection().fromLatLngToDivPixel(position)
    );
    this.DomMarkerOverlay_ = new DomOverlay(position, options);
  }

  construct() {
    const div = this.DomMarkerOverlay_.onAdd();
    this.getPanes().overlayLayer.appendChild(div);
  }

  draw() {
    return this.DomMarkerOverlay_.draw();
  }

  destroy() {
    return this.DomMarkerOverlay_.onRemove();
  }
}
