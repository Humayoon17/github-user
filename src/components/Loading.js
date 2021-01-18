import { CircularProgress } from '@material-ui/core';
import React from 'react';

export default function Loading() {
  return (
    <div className='loading'>
      <CircularProgress className='loading-icon' />
    </div>
  );
}
