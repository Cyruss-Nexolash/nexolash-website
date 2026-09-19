import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Select = ({ children, value, onValueChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {value}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
      {open && (
        <div className="absolute top-full mt-1 w-full rounded-md border border-gray-300 bg-white shadow-md z-10">
          {React.Children.map(children, child =>
            React.cloneElement(child, { onSelect: (val) => { onValueChange(val); setOpen(false); } })
          )}
        </div>
      )}
    </div>
  );
};

const SelectTrigger = ({ children, onClick }) => (
  <div onClick={onClick}>{children}</div>
);

const SelectValue = ({ placeholder }) => <span>{placeholder}</span>;

const SelectContent = ({ children }) => <div>{children}</div>;

const SelectItem = ({ children, value, onSelect }) => (
  <div
    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
    onClick={() => onSelect(value)}
  >
    {children}
  </div>
);

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };