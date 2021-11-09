import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getTranslatorForLanguage } from "../translations";

import CurrentLanguageContext from "../contexts/LanguagesContext";

function SettingsPage() {
  const { language, setLanguage } = useContext(
    CurrentLanguageContext
  );


  // TODO: change that to take the current language from Context instead of hardcoding "en"
  const t = getTranslatorForLanguage(language);

  return (
    <>
      <Link to="/">{t("go_back")}</Link>
      <h1>{t("settings")}</h1>
      <label htmlFor="language">{t("app_lang")} : </label>
      <select
        id="language"
        name="language"
        defaultValue={language} // TODO: get the default language from context
        onChange={(event) => {
          //const newLang = event.target.value;
          setLanguage(event.target.value);
          console.log(language);
          // TODO: set the (new) currentLanguage globally in the Context
        }}
      >
        <option value="en">en</option>
        <option value="pt">pt</option>
      </select>
    </>
  );
};

export default SettingsPage;
