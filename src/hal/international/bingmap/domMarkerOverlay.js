import buildDomOverlay from '../../../utils/DomOverlay';

export default class extends Microsoft.Maps.CustomOverlay {
  constructor(position, options) {
    super();
    const DomOverlay = buildDomOverlay(
      div => this.setHtmlElement(div),
      position => this.getMap().tryLocationToPixel(
        position, Microsoft.Maps.PixelReference.control)
    );
    this.DomMarkerOverlay_ = new DomOverlay(position, options);
  }

  onAdd() {
    return this.DomMarkerOverlay_.onAdd();
  }

  onLoad() {
    return this.DomMarkerOverlay_.draw();
  }

  onRemove() {
  }
}