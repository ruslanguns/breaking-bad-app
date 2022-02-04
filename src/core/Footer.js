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
        <button data-testid="en-trans" className={`langs-link en ${selectLanguage === "en" ? "active" : ""}`} onClick={() => changeLanguage('en')}>{englishText}</button>{" "}
        <button data-testid="es-trans" className={`langs-link es ${selectLanguage === "es"? "active" : ""}`} onClick={() => changeLanguage('es')}>{t("spanish")}</button>{" "}
        <button data-testid="eu-trans" className={`langs-link eu ${selectLanguage === "eu"? "active" : ""}`} onClick={() => changeLanguage('eu')}>{t('basque')}</button>
      </p>
    </div>
  );
};
export default Footer;
