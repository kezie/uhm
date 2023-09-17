// MyContext.js
import React, { useState } from 'react';

// Create the context
const MyContext = React.createContext();

// Create the context provider component
const MyContextProvider = ({ children }) => {
  const [basename, setBasename] = useState('homepage1'); // Set the initial value for basename

  return (
    <MyContext.Provider value={{ basename, setBasename }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
