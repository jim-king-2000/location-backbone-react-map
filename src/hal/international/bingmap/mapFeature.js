const customMapStyle = {
  elements: {
    transportation: { visible: false },
  },
  version: '1.0' 
};

export class MapFeature {
  constructor(map) {
    this.setFullMap = isFullMap => {
      map.setOptions({
        customMapStyle: isFullMap ? {} : customMapStyle,
      })
      map.setView({
        labelOverlay: isFullMap ?
          Microsoft.Maps.LabelOverlay.visible :
          Microsoft.Maps.LabelOverlay.hidden,
      });
    };
  }
}