import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "../firebaseConfig";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import BackgroundImg from "./assets/images/deco.png";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
  body {
    background: url(${BackgroundImg});
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Review" element={<Review />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/Mypage" element={<MyPage />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
