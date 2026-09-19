import React from 'react';

const toast = {
  success: (message) => console.log('Success:', message),
  error: (message) => console.error('Error:', message),
};

const Toaster = () => <div></div>;

export { toast, Toaster };