import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Logout() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await auth.signOut();
      navigate("/login"); // 로그아웃 후 로그인 페이지로 이동하거나 다른 작업을 수행할 수 있습니다.
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  return (
    <Main>
      <Container>
        <BlueBg>
          <BoxSignIn>
            <h2>로그아웃 하시겠습니까?</h2>
            <LogOutBtn type="button" onClick={logout}>
              Logout
            </LogOutBtn>
          </BoxSignIn>
        </BlueBg>
      </Container>
    </Main>
  );
}

export default Logout;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #d1b2ff;
  transition: 0.5s;
`;

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  margin: 20px;

  @media (max-width: 1024px) {
    max-width: 400px;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0%;
  }
`;

const BoxSignIn = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
  }
`;

const BlueBg = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: 420px;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);

  @media (max-width: 1024px) {
    top: 0%;
    height: 100%;
  }
`;
const LogOutBtn = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background: #fff;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  border: none;

  &:hover {
    background-color: #d1b2ff;
    color: white;
  }
`;
