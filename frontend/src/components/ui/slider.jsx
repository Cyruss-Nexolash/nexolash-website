import React, { useState } from 'react';

const Slider = React.forwardRef(({ className = '', value = [0], onValueChange, max = 100, min = 0, step = 1, ...props }, ref) => {
  const [currentValue, setCurrentValue] = useState(value[0]);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setCurrentValue(newValue);
    onValueChange([newValue]);
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={currentValue}
      onChange={handleChange}
      className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Slider.displayName = 'Slider';

export { Slider };