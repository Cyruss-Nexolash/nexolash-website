import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ children, className = '' }) => (
  <nav className={`flex ${className}`} aria-label="Breadcrumb">
    <ol className="flex items-center space-x-1">
      {children}
    </ol>
  </nav>
);

const BreadcrumbItem = ({ children, className = '' }) => (
  <li className={`flex items-center ${className}`}>
    {children}
  </li>
);

const BreadcrumbLink = ({ children, className = '', href }) => (
  <a
    href={href}
    className={`text-sm font-medium text-gray-500 hover:text-gray-700 ${className}`}
  >
    {children}
  </a>
);

const BreadcrumbPage = ({ children, className = '' }) => (
  <span className={`text-sm font-medium text-gray-900 ${className}`}>
    {children}
  </span>
);

const BreadcrumbSeparator = ({ className = '' }) => (
  <ChevronRight className={`h-4 w-4 text-gray-400 ${className}`} />
);

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator };