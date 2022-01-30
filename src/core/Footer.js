import { useTranslation } from "react-i18next";
import "./../styles/footer.css";
const Footer = () => {
  const { t, i18n } = useTranslation();
  const selectLanguage = localStorage.getItem("language") ? localStorage.getItem("language") : 'en';
  const changeLanguage = (code) => {
    console.log(code);
    localStorage.setItem("language", code);
    i18n.changeLanguage(code);
  };
  return (
    <div className="footer">
      <p>
        Breaking Bad with React - Anartz Mugika Ledo -{"  "}
        {new Date().getUTCFullYear()} {` /   ${t("languages.label")} `}
        <button className={`langs-link ${selectLanguage === "en" ? "active" : "en"}`} onClick={() => changeLanguage('en')}>{t("languages.english")}</button>{" "}
        <button className={`langs-link ${selectLanguage === "es"? "active" : "es"}`} onClick={() => changeLanguage('es')}>{t("languages.spanish")}</button>{" "}
        <button className={`langs-link ${selectLanguage === "eu"? "active" : "eu"}`} onClick={() => changeLanguage('eu')}>{t('languages.basque')}</button>
      </p>
    </div>
  );
};
export default Footer;
