import React from 'react';

const Menubar = ({ children }) => <div>{children}</div>;

const MenubarMenu = ({ children }) => <div>{children}</div>;

const MenubarTrigger = ({ children }) => <button>{children}</button>;

const MenubarContent = ({ children }) => <div>{children}</div>;

const MenubarItem = ({ children }) => <div>{children}</div>;

export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem };