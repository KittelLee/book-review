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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<UserCredential | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
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
      toast.success("회원가입 되었습니다");
      toggleForm();
      await FirstLogin();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
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
    } catch {
      /* Empty */
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Main showForm={showForm}>
      <Container>
        <BlueBg>
          <BoxSignIn>
            <h2>Already have an Account?</h2>
            <SignInBtn onClick={toggleForm}>로그인</SignInBtn>
          </BoxSignIn>

          <BoxSignUp>
            <h2>Don`t Already have an Account?</h2>
            <SignInBtn onClick={() => setShowForm(false)}>회원가입</SignInBtn>
          </BoxSignUp>
        </BlueBg>
        <FormBox showForm={showForm}>
          <SignInForm showForm={showForm}>
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
            {error && <p>아이디/비밀번호가 틀립니다.</p>}
            {user && <div>Welcome back, {user.user.email}!</div>}{" "}
          </SignInForm>

          <SignUpForm showForm={showForm}>
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
                onChange={(e) => setNickName(e.target.value)}
                placeholder="NickName"
              />
              <button type="submit">Sign Up</button>
            </form>
            {user && <div>Welcome, {user.user.email}!</div>}
          </SignUpForm>
        </FormBox>
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

const BoxSignIn = styled.div`
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

const BoxSignUp = styled.div`
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

const SignInBtn = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background: #fff;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  border: none;
`;

const FormBox = styled.div<MainProps>`
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

const SignInForm = styled.div<MainProps>`
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

const SignUpForm = styled.div<MainProps>`
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
