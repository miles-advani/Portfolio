import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
    return (
      <ul className="logo">
        <li>
        <Link to="/">ma<span>dev</span></Link>
        </li>
      </ul>
    );
  }