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
          <MapCanvas mapKey='143394ca6f243e7af025b73bad6b88ca' />
        </Box>
      </Grommet>
    );
  }
}