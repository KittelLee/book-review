import React from "react";
import styled from "styled-components";
import Catimg from "../../assets/images/test5.jpg";

function MyPage() {
  return (
    <Body>
      <Card>
        <Lines></Lines>
        <ImgBx>
          <img src={Catimg}></img>
        </ImgBx>
        <ConTent>
          <DeTail>
            <h2>
              닉네임 넣는자리 <br />
            </h2>
            <Data>
              <h3>
                Nickname<br></br> <span>sonjinbin</span>{" "}
              </h3>
              <h3>
                ID <br></br>
                <span>withsjb1@gmail.com</span>{" "}
              </h3>
              <h3>
                Password <br></br>
                <span>asd7170882@</span>{" "}
              </h3>
            </Data>

            <ActionBtn>
              <button>반영하기</button>
            </ActionBtn>
          </DeTail>
        </ConTent>
      </Card>
    </Body>
  );
}

export default MyPage;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #333;
  font-family: "Poppins", sans-serif;
`;

const Lines = styled.div`
  position: absolute;
  inset: 0;
  background: #000;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 120px;
    background: linear-gradient(
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff,
      transparent
    );
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  &::after {
    content: "";
    position: absolute;
    background: #292929;
    inset: 3px;
  }
`;

const ImgBx = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background: black;
  transition: 0.5s;
  z-index: 10;
  overflow: hidden;

  img {
    position: absolute;
    z-index: 1;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    top: 10px;
    left: 10px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;
    transform: translate(-50%, -50%);
    background: linear-gradient(
      transparent,
      #ff3c7b,
      #ff3c7b,
      #ff3c7b,
      transparent
    );
    animation: animate2 6s linear infinite;

    @keyframes animate2 {
      0% {
        transform: translate(-50%, -50%) rotate(360deg);
      }

      100% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
  }
  &::after {
    content: "";
    position: absolute;
    inset: 3px;
    background: #292929;
  }
`;

const ConTent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;

const DeTail = styled.div`
  padding: 40px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  transform: translateY(145px);
`;

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  h3 {
    font-size: 1em;
    color: #45f3ff;
    line-height: 1.2em;
    font-size: 600;
  }

  span {
    font-size: 0.85em;
    font-weight: 400;
    color: #fff;
  }
`;

const ActionBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    padding: 10px 30px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 500;
    background: #45f3ff;
    color: #222;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

/*변수 사용 순서때문에 card에 css를 imgbx밑으로 내렸음 */
const Card = styled.div`
  position: relative;
  width: 350px;
  height: 190px;
  background: #333;
  transition: 0.5s;

  h2 {
    font-size: 1.25em;
    font-weight: 600;
    color: #45f3ff;
    line-height: 1.2em;
  }

  span {
    font-size: 0.75em;
    font-weight: 500;
    color: #fff;
  }
  &:hover {
    height: 550px;

    ${ImgBx} {
      width: 250px;
      height: 250px;
    }

    ${ConTent} {
      transform: translateY(0px);
    }

    ${DeTail} {
      transform: translateY(0px);
    }
  }
`;
