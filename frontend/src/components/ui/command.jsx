import React from 'react';

const Command = ({ children }) => <div>{children}</div>;

const CommandInput = ({ children }) => <input>{children}</input>;

const CommandList = ({ children }) => <div>{children}</div>;

const CommandEmpty = ({ children }) => <div>{children}</div>;

const CommandGroup = ({ children }) => <div>{children}</div>;

const CommandItem = ({ children }) => <div>{children}</div>;

export { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem };