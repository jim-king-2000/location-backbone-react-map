import { renderToDiv } from '../../../utils/Render';

export default class extends window.BMap.Overlay {
  constructor(center, options) {
    super();
    this._center = center;
    this.options = options;
  }

  initialize(map) {
    this._map = map;
    const div = renderToDiv(this.options.children);
    div.style.position = 'absolute';
    div.style.transform = `rotate(${this.options.angle}deg)`;
    map.getPanes().markerPane.appendChild(div);
    this._div = div;
    return div;
  }

  draw() {
    const position = this._map.pointToOverlayPixel(this._center);
    this._div.style.left = position.x - this._div.offsetWidth / 2 + 'px';
    this._div.style.top = position.y - this._div.offsetHeight / 2 + 'px';
  }

  show() {
    if (this._div){    
      this._div.style.display = '';
    }
  }

  hide() {
    if (this._div){    
      this._div.style.display = 'none';
    }
  }
}