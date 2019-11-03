
export class MapFeature {
  constructor(map) {
    this.setFullMap = isFullMap => {
      const opacity = isFullMap ? 1 : 0;
      map.setLayoutProperty('road', 'Opacity', opacity);
    };
  }
}