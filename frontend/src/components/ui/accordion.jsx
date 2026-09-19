import React from 'react';

const Accordion = ({ children }) => <div>{children}</div>;

const AccordionItem = ({ children }) => <div>{children}</div>;

const AccordionTrigger = ({ children }) => <button>{children}</button>;

const AccordionContent = ({ children }) => <div>{children}</div>;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };