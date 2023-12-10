import { Link } from "react-router-dom";
import styled from "styled-components";
import GitHubImg from "../assets/images/github.svg";
import BlogImg from "../assets/images/blog.svg";

function Footer() {
  return (
    <FooterWrap>
      <FooterInner>
        <FooterLeft>
          <MenuList>
            <ul>
              <li>
                <Link to="/">메인 페이지</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/Review">책 리뷰</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/Search">책 검색</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/Board">커뮤니티</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/Mypage">마이페이지</Link>
              </li>
            </ul>
          </MenuList>
          <PersonInfo>
            <div className="first-row">
              <IconImg src={GitHubImg} />
              <span>
                <a href="https://github.com/KittelLee">이진욱</a>
              </span>
              <span>
                <a href="https://github.com/heriondb">강수진</a>
              </span>
              <span>
                <a href="https://github.com/withsjb">손진빈</a>
              </span>
            </div>
            <div className="second-row">
              <IconImg src={BlogImg} />
              <span>
                <a href="https://projectlog.tistory.com/">이진욱</a>
              </span>
              <span>
                <a href="https://pozip.tistory.com/">강수진</a>
              </span>
              <span>
                <a href="#">손진빈</a>
              </span>
            </div>
          </PersonInfo>
        </FooterLeft>
        <FooterRight>
          <h3>BOOK-REVIEW</h3>
          <p>개발자: 이진욱 강수진 손진빈</p>
          <p>
            레포지토리 주소:{" "}
            <a href="https://github.com/KittelLee/book-review">
              github.com/KittelLee/book-review
            </a>
          </p>
          <p>개발기간: 2023.12.6 ~ 2023.12.20</p>
          <p>COPYRIGHT &copy; 2023&nbsp;ALL RIGHTS RESERVED</p>
        </FooterRight>
      </FooterInner>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(251, 251, 251);
`;

const FooterInner = styled.div`
  display: flex;
  width: 70%;
  padding: 12px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterLeft = styled.div`
  width: 70%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const MenuList = styled.div`
  ul li {
    display: inline;
    margin-left: 10px;
  }
  ul li a {
    text-decoration: none;
    color: black;
  }
  ul li a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 600px) {
    ul li {
      margin-left: 5px;
    }
    ul li a {
      font-size: 0.8rem;
    }
  }
`;

const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  @media screen and (max-width: 600px) {
    text-align: center;
    margin-left: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #f43530;
      font-weight: 500;
    }
  }
  span {
    padding: 0.2rem;
  }
  .first-row,
  .second-row {
    font-weight: 500;
    font-size: 1.1em;
  }
`;

const IconImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

const FooterRight = styled.div`
  width: 30%;
  @media screen and (max-width: 600px) {
    width: 100%;
    h3,
    p,
    a {
      text-align: center;
    }
  }
  p {
    line-height: 0.5;
    font-family: Arial;
    font-size: 0.8rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: red;
  }
`;
