import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faHouse,
  faLock,
  faBook,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { AuthStateContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Header() {
  const authState = useContext(AuthStateContext);

  return (
    <HeaderWrap>
      <Navbar>
        <Link to="/" className="sub-list">
          <FontAwesomeIcon icon={faHouse} id="icon-color1" />
          <span>Home</span>
        </Link>
        <Link to="/List" className="sub-list">
          <FontAwesomeIcon icon={faBook} id="icon-color2" />
          <span>BookList</span>
        </Link>
        <Link to="/Board" className="sub-list">
          <FontAwesomeIcon icon={faClipboardList} id="icon-color3" />
          <span>Board</span>
        </Link>
        <Link to="/MyPage" className="sub-list">
          <FontAwesomeIcon icon={faUser} id="icon-color4" />
          <span>MyPage</span>
        </Link>
        {authState &&
        authState.state === "loaded" &&
        authState.isAuthentication ? (
          <Link to="/Logout" className="sub-list">
            <FontAwesomeIcon icon={faRightFromBracket} id="icon-color5" />
            <span>Logout</span>
          </Link>
        ) : (
          <Link to="/Login" className="sub-list">
            <FontAwesomeIcon icon={faLock} id="icon-color5" />
            <span>Login</span>
          </Link>
        )}
      </Navbar>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(251, 251, 251);
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const Navbar = styled.div`
  position: relative;
  margin: 10px;
  .sub-list {
    text-decoration: none;
    color: black;
    position: relative;
    z-index: 1;
    margin: 0 20px;
    font-size: 36px;
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }

    span {
      display: none;
    }
    #icon-color1 {
      color: red;
    }
    #icon-color2 {
      color: orange;
    }
    #icon-color3 {
      color: green;
    }
    #icon-color4 {
      color: blue;
    }
    #icon-color5 {
      color: purple;
    }
  }
`;
