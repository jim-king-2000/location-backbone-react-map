import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
import dynamic from 'next/dynamic';

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
            <Box flex><MapCanvas mapKey='143394ca6f243e7af025b73bad6b88ca' mapVendor='AMap' /></Box>
            <Box flex><MapCanvas mapKey='ezIVxAYOPRYR8D3iGKsP6jFlqMiuZjTr' mapVendor='BMap' /></Box>
            <Box flex><MapCanvas mapKey='KQGBZ-4Q5CU-N7FVJ-BSS24-X44M6-7XBW2' mapVendor='TMap' /></Box>
          </Box>
          <Box direction='row' flex>
            <Box flex><MapCanvas mapVendor='SogouMap' /></Box>
            <Box flex><MapCanvas mapKey='AhDjnlgDaR87L08Y3Uchu87Ky5vfvj8pkIQfLhGZ2yplreOxws6f3XCMHj0tMAR-' mapVendor='BingMap' /></Box>
            <Box flex><MapCanvas mapKey='AIzaSyBy1-bole0TkeLc8s537ynNJauFv5iY4_I' mapVendor='GoogleMap' /></Box>
          </Box>
          <Box direction='row' flex>
            <Box flex><MapCanvas mapKey='b618c2e99b8e8267796563c32756f9bd' mapVendor='TianMap' /></Box>
            <Box flex><MapCanvas mapKey='oSDd-lyooghz4RTOMVFHpU8Kk2swTJ7i_cZGcbv1ulc' mapVendor='HereMap' /></Box>
            <Box flex></Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}