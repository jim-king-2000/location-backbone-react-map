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
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_AMAP} mapVendor='RAMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_BMAP} mapVendor='RBMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_TMAP} mapVendor='RQQMap' /></Box>
          </Box>
          <Box direction='row' flex>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_BINGMAP} mapVendor='RBingMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_GOOGLEMAP} mapVendor='RGoogleMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_MAPBOX} mapVendor='RMapBoxGL' /></Box>
          </Box>
          <Box direction='row' flex>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_HEREMAP} mapVendor='RHereMap' /></Box>
            <Box flex><MapCanvas mapVendor='RSogouMap' /></Box>
            <Box flex><MapCanvas mapKey={Config.MAP_KEY_TIANMAP} mapVendor='RTianMap' /></Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}