import React from 'react';

const Form = ({ children }) => <form>{children}</form>;

const FormField = ({ children }) => <div>{children}</div>;

const FormItem = ({ children }) => <div>{children}</div>;

const FormLabel = ({ children }) => <label>{children}</label>;

const FormControl = ({ children }) => <div>{children}</div>;

const FormDescription = ({ children }) => <p>{children}</p>;

const FormMessage = ({ children }) => <p>{children}</p>;

export { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage };