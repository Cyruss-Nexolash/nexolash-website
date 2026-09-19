import React from 'react';

const ScrollArea = ({ children, className = '' }) => (
  <div className={`overflow-auto ${className}`}>
    {children}
  </div>
);

const ScrollBar = ({ children }) => <div>{children}</div>;

export { ScrollArea, ScrollBar };