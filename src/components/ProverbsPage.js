import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTranslatorForLanguage } from "../translations";
import CurrentLanguageContext from "../contexts/LanguagesContext";

const ProverbsPage = (props) => {
  // TODO: change this to something else, coming from the context
  const [proverbs, setProverbs] = useState([]);
  // TODO: fetch the proverbs
  console.log(proverbs);
  // TODO: change that to take the current language from Context instead of hardcoding "en"
  const { language, setLanguage } = useContext(CurrentLanguageContext);
  const t = getTranslatorForLanguage(language);

  useEffect(() => {
      console.log(`fetching "${language}" proverbs`);
      fetch(`/pretend-api/results-${language}.json`)
        .then((res) => res.json())
        .then((data) => setProverbs(data.results));
  }, []);

  return (
    <>
      <Link to="/settings">{t("settings")}</Link>
      <h1>{t("proverbs")}</h1>
      <ul>
        {proverbs.map((res) => (
          <li key={res}>{res}</li>
        ))}
      </ul>
    </>
  );
};

export default ProverbsPage;
