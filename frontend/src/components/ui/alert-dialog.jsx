import React from 'react';

const AlertDialog = ({ children }) => <div>{children}</div>;

const AlertDialogTrigger = ({ children }) => <div>{children}</div>;

const AlertDialogContent = ({ children }) => <div>{children}</div>;

const AlertDialogHeader = ({ children }) => <div>{children}</div>;

const AlertDialogTitle = ({ children }) => <h2>{children}</h2>;

const AlertDialogDescription = ({ children }) => <p>{children}</p>;

const AlertDialogFooter = ({ children }) => <div>{children}</div>;

const AlertDialogAction = ({ children }) => <button>{children}</button>;

const AlertDialogCancel = ({ children }) => <button>{children}</button>;

export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel };