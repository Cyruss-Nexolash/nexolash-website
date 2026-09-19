import React from 'react';

const Table = ({ children }) => <table>{children}</table>;

const TableHeader = ({ children }) => <thead>{children}</thead>;

const TableBody = ({ children }) => <tbody>{children}</tbody>;

const TableRow = ({ children }) => <tr>{children}</tr>;

const TableHead = ({ children }) => <th>{children}</th>;

const TableCell = ({ children }) => <td>{children}</td>;

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };