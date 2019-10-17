import { renderToDiv } from '../../../utils/Render';

export default class extends google.maps.OverlayView {
  constructor(position, options) {
    super();
    this._position = position;
    this.options = options;
    if (options.map) this.setMap(options.map);
  }

  onAdd() {
    const div = renderToDiv(this.options.children);
    div.style.position = 'absolute';
    div.style.transform = `rotate(${this.options.angle}deg)`;
    this.getPanes().overlayLayer.appendChild(div);
    this._div = div;
    return div;
  }

  draw() {
    const position = this.getProjection().fromLatLngToDivPixel(this._position);
    this._div.style.left = position.x - this._div.offsetWidth / 2 + 'px';
    this._div.style.top = position.y - this._div.offsetHeight / 2 + 'px';
  }

  onRemove() {
    this._div.parentNode.removeChild(this._div);
    this._div = null;
  }
}
