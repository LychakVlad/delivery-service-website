import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingBlock = () => {
  return (
    <div className="container">
      <Skeleton height={670} width={1150} />
    </div>
  );
};

export default LoadingBlock;
