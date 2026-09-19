import React from 'react';

const NavigationMenu = ({ children }) => <nav>{children}</nav>;

const NavigationMenuList = ({ children }) => <ul>{children}</ul>;

const NavigationMenuItem = ({ children }) => <li>{children}</li>;

const NavigationMenuTrigger = ({ children }) => <button>{children}</button>;

const NavigationMenuContent = ({ children }) => <div>{children}</div>;

const NavigationMenuLink = ({ children }) => <a>{children}</a>;

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink };