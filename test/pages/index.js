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
          {/* <MapCanvas mapKey='143394ca6f243e7af025b73bad6b88ca' mapVendor='AMap' /> */}
          {/* <MapCanvas mapKey='ezIVxAYOPRYR8D3iGKsP6jFlqMiuZjTr' mapVendor='BMap' /> */}
          {/* <MapCanvas mapKey='KQGBZ-4Q5CU-N7FVJ-BSS24-X44M6-7XBW2' mapVendor='TMap' /> */}
          <MapCanvas mapKey='AhDjnlgDaR87L08Y3Uchu87Ky5vfvj8pkIQfLhGZ2yplreOxws6f3XCMHj0tMAR-' mapVendor='BingMap' />
        </Box>
      </Grommet>
    );
  }
}