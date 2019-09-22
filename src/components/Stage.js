import React from 'react';

import Cell from './Cell';

const Stage = ({ stage }) => (
  <div>
    { stage && stage.length > 0  ? 
    stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))
  : 'There is no data yet.' }
  </div>
);

export default Stage;