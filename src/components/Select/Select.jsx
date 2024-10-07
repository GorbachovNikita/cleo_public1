import React from 'react';
import './Select.css';

const CustomSelect = ({ options, value, onChange, label }) => {
  return (
<div className="custom-select">
  <select value={value} onChange={onChange} className='select'>
    <option hidden>{label}</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
  <span className="arrow"></span>
</div>
  );
};

export default CustomSelect;