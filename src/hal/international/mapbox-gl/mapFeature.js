const customMapStyle = [{
  featureType: 'poi',
  stylers: [{ visibility: 'off' }]
}, {
  featureType: 'road',
  stylers: [{ visibility: 'off' }]
}, {
  featureType: 'transit',
  stylers: [{ visibility: 'off' }]
}, {
  featureType: 'administrative',
  stylers: [{ visibility: 'off' }]
}, {
  featureType: 'landscape',
  stylers: [{ visibility: 'off' }]
}];

export class MapFeature {
  constructor(map) {
    this.setFullMap = isFullMap => {
      const visibility = isFullMap ? 'visible' : 'none';
      map.setLayoutProperty('way', 'visibility', visibility);
    };
  }
}