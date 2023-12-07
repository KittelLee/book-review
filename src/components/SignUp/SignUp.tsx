import React, { useState } from "react";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<UserCredential | null>(null);

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential); // 사용자 정보 저장
      // 회원가입 성공 처리, 예를 들어 홈페이지로 리디렉션
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
      <h1>SignUp</h1>
      <form onSubmit={register}>
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
        <button type="submit">Sign Up</button>
        {error && <p>Error: {error}</p>}
      </form>
      {user && <div>Welcome, {user.user.email}!</div>}
    </div>
  );
}

export default SignUp;
