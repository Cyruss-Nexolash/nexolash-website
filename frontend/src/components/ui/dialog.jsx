import React from 'react';

const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const DialogHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

const DialogTitle = ({ children, className = '' }) => (
  <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
);

const DialogDescription = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-600 ${className}`}>{children}</p>
);

const DialogFooter = ({ children, className = '' }) => (
  <div className={`mt-4 flex justify-end space-x-2 ${className}`}>{children}</div>
);

const DialogTrigger = ({ children, onClick }) => (
  <div onClick={onClick}>{children}</div>
);

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger };