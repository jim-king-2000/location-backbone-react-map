
function generateStyle(fullMap) {
  return [{
    'featureType': 'road',
    'elementType': 'all',
    'stylers': {
      'visibility': fullMap ? 'on' : 'off'
    }
  }, {
    'featureType': 'building',
    'elementType': 'all',
    'stylers': {
      'visibility': fullMap ? 'on' : 'off'
    }
  }, {
    'featureType': 'poilabel',
    'elementType': 'all',
    'stylers': {
      'visibility': fullMap ? 'on' : 'off'
    }
  }, {
    'featureType': 'manmade',
    'elementType': 'all',
    'stylers': {
      'visibility': fullMap ? 'on' : 'off'
    }
  }, {
    'featureType': 'all',
    'elementType': 'labels.text.fill',
    'stylers': {
      'visibility': fullMap ? 'on' : 'off'
    }
  }];
}

export class MapFeature {
  constructor(map) {
    this.setFullMap = isFullMap => map.setMapStyleV2({
      styleJson: generateStyle(isFullMap)
    });
  }
}