import React, { createContext, useState } from "react";

const CurrentLanguageContext = createContext(null);

export const CurrentLanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <CurrentLanguageContext.Provider
      value={{language,setLanguage}}>
      {children}
    </CurrentLanguageContext.Provider>
  );
};

export default CurrentLanguageContext;
