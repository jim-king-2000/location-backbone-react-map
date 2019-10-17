import { renderToDiv } from '../../../utils/Render';

export default class extends qq.maps.Overlay {
  constructor(position, options) {
    super();
    this._position = position;
    this.options = options;
  }

  construct () {
    const div = renderToDiv(this.options.children);
    div.style.position = 'absolute';
    div.style.transform = `rotate(${this.options.angle}deg)`;
    this.getPanes().overlayMouseTarget.appendChild(div);
    this._div = div;
    return div;
  }

  draw() {
    const position = this.getProjection().fromLatLngToDivPixel(this._position);
    this._div.style.left = position.x - this._div.offsetWidth / 2 + 'px';
    this._div.style.top = position.y - this._div.offsetHeight / 2 + 'px';
  }

  destroy() {
    this._div.parentNode.removeChild(this._div);
    this._div = null;
  }
}