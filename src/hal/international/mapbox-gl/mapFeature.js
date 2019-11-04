
export class MapFeature {
  constructor(map) {
    this.setFullMap = isFullMap => {
      const opacity = isFullMap ? 'visible' : 'none';
      map.setLayoutProperty('road', 'visibility', opacity);
    };
  }
}