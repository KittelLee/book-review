import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsSpin,
  faClipboardList,
  faGear,
  faHouse,
  faLock,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="main">
      <header className="header-main">
        <div className="sub-top">
          <Link to="/" className="sub-list">
            <FontAwesomeIcon icon={faHouse} id="icon-color1" />
            <span>Home</span>
          </Link>
          <Link to="/Auto" className="sub-list">
            <FontAwesomeIcon icon={faArrowsSpin} id="icon-color2" />
            <span>Auto</span>
          </Link>
          <Link to="/Manual" className="sub-list">
            <FontAwesomeIcon icon={faGear} id="icon-color3" />
            <span>Manual</span>
          </Link>
          <Link to="/Board" className="sub-list">
            <FontAwesomeIcon icon={faClipboardList} id="icon-color4" />
            <span>Board</span>
          </Link>
          <Link to="/Login" className="sub-list">
            <FontAwesomeIcon icon={faLock} id="icon-color5" />
            <span>Login</span>
          </Link>
          <Link to="/Join" className="sub-list">
            <FontAwesomeIcon icon={faUserLock} id="icon-color6" />
            <span>Join</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
