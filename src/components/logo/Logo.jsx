import { HashLink as Link } from "react-router-hash-link";
import logo from '../../assets/logo.svg';
import "./Logo.css";

// export default function Logo() {
//     return (
//       <ul className="logo">
//         <li>
//         <Link to="/#top">ma<span>dev</span></Link>
//         </li>
//       </ul>
//     );
//   }
export default function Logo() {
  return (
    <ul className="logo">
      <li>
        <Link to="/#top">
          <img src={logo} alt="Logo" />
        </Link>
      </li>
    </ul>
  );
}