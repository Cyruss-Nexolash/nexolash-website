import React from 'react';

const RadioGroup = ({ value, onValueChange, children }) => (
  <div className="space-y-2">
    {React.Children.map(children, child =>
      React.cloneElement(child, { checked: child.props.value === value, onChange: () => onValueChange(child.props.value) })
    )}
  </div>
);

const RadioGroupItem = React.forwardRef(({ className = '', value, checked, onChange, ...props }, ref) => (
  <button
    type="button"
    role="radio"
    aria-checked={checked}
    className={`aspect-square h-4 w-4 rounded-full border border-gray-300 text-blue-500 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${checked ? 'bg-blue-500' : ''} ${className}`}
    onClick={onChange}
    ref={ref}
    {...props}
  />
));

RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroup, RadioGroupItem };