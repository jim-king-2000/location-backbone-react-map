import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
import dynamic from 'next/dynamic';
import Config from '../.config.js';

const MapCanvas = dynamic(
  () => import('../components/MapCanvas'),
  { ssr: false }
);

export default class extends Component {
  render() {
    return (
      <Grommet full plain>
        <Box fill>
          <Box direction='row' flex>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_AMAP} mapVendor='AMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_BMAP} mapVendor='BMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_TMAP} mapVendor='TMap' /></Box>
          </Box>
          <Box direction='row' flex>
            <Box flex><MapCanvas mapVendor='SogouMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_TIANMAP} mapVendor='TianMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_MAPBOX} mapVendor='MapBox' /></Box>
          </Box>
          <Box direction='row' flex>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_HEREMAP} mapVendor='HereMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_BINGMAP} mapVendor='BingMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_GOOGLEMAP} mapVendor='GoogleMap' /></Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}