import React from 'react';

const Collapsible = ({ children }) => <div>{children}</div>;

const CollapsibleTrigger = ({ children }) => <button>{children}</button>;

const CollapsibleContent = ({ children }) => <div>{children}</div>;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };