import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends google.maps.OverlayView {
  constructor(position, options) {
    super();
    const DomOverlay = buildDomOverlay(
      position => this.getProjection().fromLatLngToDivPixel(position)
    );
    this.DomMarkerOverlay_ = new DomOverlay(position, options);
    if (options.map) this.setMap(options.map);
  }

  onAdd() {
    const div = this.DomMarkerOverlay_.onAdd();
    this.getPanes().overlayLayer.appendChild(div);
  }

  draw() {
    return this.DomMarkerOverlay_.draw();
  }

  onRemove() {
    return this.DomMarkerOverlay_.onRemove();
  }
}
