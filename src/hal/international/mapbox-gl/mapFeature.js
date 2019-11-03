
export class MapFeature {
  constructor(map) {
    this.setFullMap = isFullMap => {
      const visibility = isFullMap ? 'visible' : 'none';
      map.setLayoutProperty('road', 'visibility', visibility);
    };
  }
}