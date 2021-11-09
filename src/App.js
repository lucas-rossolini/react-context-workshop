import React, { useState, useContext, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProverbsPage from "./components/ProverbsPage";
import SettingsPage from "./components/SettingsPage";
import { CurrentLanguageContextProvider } from "./contexts/LanguagesContext";

function App() {
/*   const [currentLanguage, setCurrentLanguage] = useState("en");*/

  // TODO : instanciate the two contexts providers here
  // TODO : for exemple, you should pass proverbs, setProverbs and fetchProverbs to the ProverbsContext.Provider's value prop

  return (
    <CurrentLanguageContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={ProverbsPage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </Router>
    </CurrentLanguageContextProvider>
  );
}

export default App;
