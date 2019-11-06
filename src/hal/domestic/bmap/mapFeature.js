
function generateVisibility(fullMap) {
  return {
    'visibility': fullMap ? 'on' : 'off'
  }
}

function generateStyle(fullMap) {
  return [{
    'featureType': 'road',
    'elementType': 'all',
    'stylers': generateVisibility(fullMap)
  }, {
    'featureType': 'building',
    'elementType': 'all',
    'stylers': generateVisibility(fullMap)
  }, {
    'featureType': 'poilabel',
    'elementType': 'all',
    'stylers': generateVisibility(fullMap)
  }, {
    'featureType': 'manmade',
    'elementType': 'all',
    'stylers': generateVisibility(fullMap)
  }, {
    'featureType': 'all',
    'elementType': 'labels.text.fill',
    'stylers': generateVisibility(fullMap)
  }];
}

export class MapFeature {
  constructor(map) {
    this.setFullMap = isFullMap => map.setMapStyleV2({
      styleJson: generateStyle(isFullMap)
    });
  }
}