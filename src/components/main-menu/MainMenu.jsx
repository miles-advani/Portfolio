import { HashLink as Link } from "react-router-hash-link";
import { useContext } from "react";
import { LanguageContext } from "../../store/language-context/LanguageContext";
import "./MainMenu.css";

export default function MainMenu() {
  const { layoutData } = useContext(LanguageContext);
  const { menuLinks } = layoutData;

  return (
    <ul className="menu">
     <li>
        <Link to="/">{menuLinks.home}</Link>
      </li>
      <li>
        <Link smooth to="/#about-me">
          {menuLinks.about}
        </Link>
      </li>
      <li>
        <Link smooth to="/#projects">
          {menuLinks.projects}
        </Link>
      </li>
      <li>
        <Link smooth to="/#contact">
          {menuLinks.contact}
        </Link>
      </li>
    </ul>
  );
}
