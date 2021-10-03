import React from 'react';

import Votes from './components/vote-counter';
import Status from './components/status';


export default props => {
  return (
    <>
      <Votes />
      <Status />
    </>
  )
};
