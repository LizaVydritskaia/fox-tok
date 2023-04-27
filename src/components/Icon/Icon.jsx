import React from 'react';

import './Icon.css';

export const Icon = ({ className, hrefIconName }) => {
  return (
    <svg className={className}>
      <use href={hrefIconName} />
    </svg>
  );
};
