import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faHouse,
  faLock,
  faUserLock,
  faBook,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrap>
      <Navbar>
        <Link to="/" className="sub-list">
          <FontAwesomeIcon icon={faHouse} id="icon-color1" />
          <span>Home</span>
        </Link>
        <Link to="/Review" className="sub-list">
          <FontAwesomeIcon icon={faBook} id="icon-color2" />
          <span>BookReview</span>
        </Link>
        <Link to="/Search" className="sub-list">
          <FontAwesomeIcon icon={faMagnifyingGlass} id="icon-color3" />
          <span>BookSearch</span>
        </Link>
        <Link to="/Board" className="sub-list">
          <FontAwesomeIcon icon={faClipboardList} id="icon-color4" />
          <span>Board</span>
        </Link>
        <Link to="/Mypage" className="sub-list">
          <FontAwesomeIcon icon={faUser} id="icon-color5" />
          <span>Mypage</span>
        </Link>
        <Link to="/Login" className="sub-list">
          <FontAwesomeIcon icon={faLock} id="icon-color6" />
          <span>Login</span>
        </Link>
        <Link to="/SignUp" className="sub-list">
          <FontAwesomeIcon icon={faUserLock} id="icon-color7" />
          <span>SignUp</span>
        </Link>
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
  position: fixed;
  top: 0;
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
      font-size: 28px;
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
      color: gold;
    }
    #icon-color4 {
      color: green;
    }
    #icon-color5 {
      color: blue;
    }
    #icon-color6 {
      color: purple;
    }
    #icon-color7 {
      color: black;
    }
  }
`;
