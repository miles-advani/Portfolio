import "./Header.css";
import Logo from "../logo/Logo.jsx";
import MainMenu from "../main-menu/MainMenu.jsx";
import LanguageButton from "../language-button/LanguageButton.jsx";

export default function Header() {
  return (
    <header id="header">
      <nav className="navigation">
        {/* <!-- menu-btn================================== --> */}
        <input className="menu-btn" id="menu-btn" type="checkbox" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>

        <Logo />

        <MainMenu />

        <LanguageButton />
      </nav>
    </header>
  );
}
