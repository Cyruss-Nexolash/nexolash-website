import React from 'react';

const Pagination = ({ children }) => <div>{children}</div>;

const PaginationContent = ({ children }) => <div>{children}</div>;

const PaginationItem = ({ children }) => <div>{children}</div>;

const PaginationLink = ({ children }) => <a>{children}</a>;

const PaginationPrevious = ({ children }) => <button>{children}</button>;

const PaginationNext = ({ children }) => <button>{children}</button>;

export { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext };