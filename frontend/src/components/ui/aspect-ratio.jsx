import React from 'react';

const AspectRatio = ({ ratio = 1, children, className = '' }) => (
  <div className={`relative ${className}`} style={{ paddingBottom: `${100 / ratio}%` }}>
    <div className="absolute inset-0">
      {children}
    </div>
  </div>
);

export { AspectRatio };