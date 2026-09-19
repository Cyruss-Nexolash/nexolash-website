import React, { useState } from 'react';

const Tabs = ({ defaultValue, children, onValueChange }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (newValue) => {
    setValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };
  return (
    <div>
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab: value, onTabChange: handleChange })
      )}
    </div>
  );
};

const TabsList = ({ children, className = '' }) => (
  <div className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}>
    {children}
  </div>
);

const TabsTrigger = ({ value, children, activeTab, onTabChange, className = '' }) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === value ? 'bg-white text-gray-950 shadow-sm' : 'text-gray-500'} ${className}`}
    onClick={() => onTabChange(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ value, children, activeTab, className = '' }) => (
  activeTab === value ? <div className={`mt-2 ${className}`}>{children}</div> : null
);

export { Tabs, TabsList, TabsTrigger, TabsContent };