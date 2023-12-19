import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { db } from "../Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<UserCredential | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [nickName, setnickName] = useState("");

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential); // 사용자 정보 상태에 저장
      console.log("Login successful!", userCredential);
      // 로그인 성공 처리, 예를 들어 홈페이지로 리디렉션
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // 'error'는 여기서 'Error' 타입으로 간주됩니다.
      } else {
        setError("An unknown error occurred"); // 'error'가 'Error' 타입이 아닌 경우의 처리
      }
    }
  };

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential);
      await FirstLogin(); // 사용자 정보 저장
      // 회원가입 성공 처리, 예를 들어 홈페이지로 리디렉션
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // 'error'는 여기서 'Error' 타입으로 간주됩니다.
      } else {
        setError("An unknown error occurred"); // 'error'가 'Error' 타입이 아닌 경우의 처리
      }
    }
  };

  const FirstLogin = async () => {
    try {
      const uid = auth.currentUser?.uid;

      if (uid) {
        const userDocRef = doc(db, "User", uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (!userDocSnapshot.exists()) {
          await setDoc(userDocRef, {
            profileImageUrl: "",
            NickName: nickName,
          });
        }
      }
    } catch {}
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Main showForm={showForm}>
      <Container>
        <Bluebg>
          <Boxsignin>
            <h2>Already have an Account?</h2>
            <SingninBtn onClick={toggleForm}>로그인</SingninBtn>
          </Boxsignin>

          <Boxsignup>
            <h2>Don`t Already have an Account?</h2>
            <SingninBtn onClick={() => setShowForm(false)}>회원가입</SingninBtn>
          </Boxsignup>
        </Bluebg>
        <Formbox showForm={showForm}>
          <SigninForm showForm={showForm}>
            <form onSubmit={login}>
              <h3>Sign In</h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <button type="submit">Login</button>
              <Link to="#" className="forgot">
                Forgot Password
              </Link>
            </form>
            {error && <p>Error: {error}</p>}
            {user && <div>Welcome back, {user.user.email}!</div>}{" "}
            {/* 사용자 정보 표시 */}
          </SigninForm>

          <SignupForm showForm={showForm}>
            <form onSubmit={register}>
              <h3>Sign UP</h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <input
                type="text"
                value={nickName}
                onChange={(e) => setnickName(e.target.value)}
                placeholder="NickName"
              />
              <button type="submit">Sign Up</button>
            </form>
            {user && <div>Welcome, {user.user.email}!</div>}
          </SignupForm>
        </Formbox>
      </Container>
    </Main>
  );
}

export default Login;

interface MainProps {
  showForm: boolean;
}

const Main = styled.div<MainProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${(props) => (props.showForm ? "#03a9f4" : "#f43648;")};
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

const Bluebg = styled.div`
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

const Boxsignin = styled.div`
  position: relative;
  width: 50%;
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
    position: absolute;
    width: 100%;
    height: 150px;
    top: 0;
  }
`;

const Boxsignup = styled.div`
  position: relative;
  width: 50%;
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
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
  }
`;

const SingninBtn = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background: #fff;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  border: none;
`;

const Formbox = styled.div<MainProps>`
  position: absolute;
  top: 0;
  left: ${(props) => (props.showForm ? "0" : "400px")};
  width: 50%;
  height: 100%;
  background: #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  transition: 0.5s ease-in-out;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    height: 500px;

    box-shadow: none;
    left: 0;
    top: ${(props) => (props.showForm ? "0" : "150px")};
  }
`;

const SigninForm = styled.div<MainProps>`
  position: absolute;
  left: ${(props) => (props.showForm ? "0" : "-100%")};
  top: ${(props) => (props.showForm ? "0" : "150px")};

  width: 100%;
  padding: 50px;
  transition: 0.5s;
  transition-delay: 0.25s;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .forgot {
    color: #333;
  }

  h3 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 20px;
    font-weight: 500;
  }

  input {
    width: 70%;
    margin-bottom: 20px;
    padding: 10px;
    outline: 10px;
    font-size: 16px;
    border: 1px solid #333;
  }

  button[type="submit"] {
    width: 70%;
    margin-bottom: 20px;
    padding: 10px;
    outline: 10px;
    font-size: 16px;
    border: 1px solid #333;
    background: #03a9f4;
    border: none;
    color: #fff;
    max-width: 100px;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    form {
      top: 0;
    }
  }
`;

const SignupForm = styled.div<MainProps>`
  position: absolute;
  left: ${(props) => (props.showForm ? "100%" : "0")};
  width: 100%;
  padding: 50px;
  transition: 0.5s;
  transition-delay: 0.25s;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .forgot {
    color: #333;
  }

  h3 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 20px;
    font-weight: 500;
  }

  input {
    width: 70%;
    margin-bottom: 20px;
    padding: 10px;
    outline: 10px;
    font-size: 16px;
    border: 1px solid #333;
  }

  button[type="submit"] {
    width: 70%;
    margin-bottom: 20px;
    padding: 10px;
    outline: 10px;
    font-size: 16px;
    border: 1px solid #333;
    background: #f43648;
    border: none;
    color: #fff;
    max-width: 100px;
    cursor: pointer;
  }
`;
