import { useContext } from "react";
import { LanguageContext } from "../../store/language-context/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { layoutData } = useContext(LanguageContext);
  const { copyright, portfolioCode, backToTop } = layoutData;

  console.log("Contact Data:", copyright); //

  return (
    <>
      <footer id="footer">
        <div className="copyright">
          <span>
            {copyright.year} {copyright.builtBy}
          </span>
          <span>
            {copyright.name}
            {portfolioCode.url && (
              <a
                className="portfolio-code-link"
                href={portfolioCode.url}
                title={portfolioCode.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {portfolioCode.name}{" "}
                <i className={`fa-brands fa-${portfolioCode.icon}`}></i>
              </a>
            )}
          </span>
        </div>

        <a href="#">{backToTop}</a>
      </footer>
    </>
  );
}
