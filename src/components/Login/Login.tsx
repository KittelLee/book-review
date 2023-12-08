import React, { useState } from "react";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<UserCredential | null>(null);

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential); // 사용자 정보 상태에 저장
      // 로그인 성공 처리, 예를 들어 홈페이지로 리디렉션
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // 'error'는 여기서 'Error' 타입으로 간주됩니다.
      } else {
        setError("An unknown error occurred"); // 'error'가 'Error' 타입이 아닌 경우의 처리
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
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
      </form>
      {error && <p>Error: {error}</p>}
      {user && <div>Welcome back, {user.user.email}!</div>}{" "}
      {/* 사용자 정보 표시 */}
    </div>
  );
}

export default Login;
