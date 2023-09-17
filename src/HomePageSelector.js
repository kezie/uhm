// HomepageSelector.js
import React, { useState } from 'react';
import Homepage1 from './components/pages/Global';
import Homepage2 from './components/pages/Nigeria/homepage';

const HomePageSelector = () => {
  const [selectedHomepage, setSelectedHomepage] = useState('homepage1');

  const handleSelectChange = (event) => {
    setSelectedHomepage(event.target.value);
  };

  return (
    <>
      <select value={selectedHomepage} onChange={handleSelectChange}>
        <option value="homepage1">Homepage 1</option>
        <option value="homepage2">Homepage 2</option>
      </select>

      {selectedHomepage === 'homepage1' ? <Homepage1 /> : <Homepage2 />}
    </>
  );
};

export default HomePageSelector;
