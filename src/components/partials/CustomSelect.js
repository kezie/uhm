import React, { useState } from 'react';
import './../../styles/customSelect.css';

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Nigeria');

  const urlMap = {
    'NG': '/',
    'GL': '/global',
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    // Redirect to the selected option's URL
    const selectedUrl = urlMap[option];
    if (selectedUrl) {
      window.location.href = selectedUrl;
    }
  };

  return (
    <div className="custom-select-container">
      <div className="custom-select" onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && (
        <ul className="options-list">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
