import { HashLink as Link } from "react-router-hash-link";
import "./Logo.css";

export default function Logo() {
    return (
      <ul className="logo">
        <li>
        <Link to="/#top">ma<span>dev</span></Link>
        </li>
      </ul>
    );
  }