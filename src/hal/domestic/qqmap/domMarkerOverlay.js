import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends qq.maps.Overlay {
  constructor(position, options) {
    super();
    const DomOverlay = buildDomOverlay(
      div => this.getPanes().overlayMouseTarget.appendChild(div),
      position => this.getProjection().fromLatLngToDivPixel(position)
    );
    this.DomMarkerOverlay_ = new DomOverlay(position, options);
  }

  construct() {
    return this.DomMarkerOverlay_.onAdd();
  }

  draw() {
    return this.DomMarkerOverlay_.draw();
  }

  destroy() {
    return this.DomMarkerOverlay_.onRemove();
  }
}
