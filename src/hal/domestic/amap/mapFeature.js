
export class MapFeature {
  constructor(map) {
    this.setFullMap = isFullMap => map.setFeatures(isFullMap ? 'all' : ['bg']);
  }
}