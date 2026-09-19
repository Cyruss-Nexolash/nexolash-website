import React from 'react';

const Sheet = ({ children }) => <div>{children}</div>;

const SheetTrigger = ({ children }) => <div>{children}</div>;

const SheetContent = ({ children }) => <div>{children}</div>;

const SheetHeader = ({ children }) => <div>{children}</div>;

const SheetTitle = ({ children }) => <h2>{children}</h2>;

const SheetDescription = ({ children }) => <p>{children}</p>;

const SheetFooter = ({ children }) => <div>{children}</div>;

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter };