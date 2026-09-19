import React from 'react';

const Toast = ({ children }) => <div>{children}</div>;

const ToastProvider = ({ children }) => <div>{children}</div>;

const ToastViewport = ({ children }) => <div>{children}</div>;

const ToastAction = ({ children }) => <button>{children}</button>;

const ToastClose = ({ children }) => <button>{children}</button>;

const ToastTitle = ({ children }) => <div>{children}</div>;

const ToastDescription = ({ children }) => <div>{children}</div>;

export { Toast, ToastProvider, ToastViewport, ToastAction, ToastClose, ToastTitle, ToastDescription };