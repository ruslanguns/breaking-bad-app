import { useTranslation } from "react-i18next";
import "./../styles/footer.css";
const Footer = () => {
  const { t, i18n } = useTranslation("languages");
  const selectLanguage = localStorage.getItem("language") ? localStorage.getItem("language") : 'en';
  const changeLanguage = (code) => {
    console.log(code);
    localStorage.setItem("language", code);
    i18n.changeLanguage(code);
  };
  const englishText = t("english");
  return (
    <div className="footer">
      <p>
        Breaking Bad with React - Anartz Mugika Ledo -{"  "}
        {new Date().getUTCFullYear()} {` /   ${t("label")} `}
        <button className={`langs-link ${selectLanguage === "en" ? "active" : "en"}`} onClick={() => changeLanguage('en')}>{englishText}</button>{" "}
        <button className={`langs-link ${selectLanguage === "es"? "active" : "es"}`} onClick={() => changeLanguage('es')}>{t("spanish")}</button>{" "}
        <button className={`langs-link ${selectLanguage === "eu"? "active" : "eu"}`} onClick={() => changeLanguage('eu')}>{t('basque')}</button>
      </p>
    </div>
  );
};
export default Footer;
