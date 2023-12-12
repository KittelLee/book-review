import "../firebaseConfig";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import BackgroundImg from "./assets/images/deco.png";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import MyPage from "./components/Profile/MyPage";

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
          {/* <Route path="/Search" element={<Search />} />
          <Route path="/Board" element={<Board />} /> */}
          <Route path="/Mypage" element={<MyPage />} />

          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
