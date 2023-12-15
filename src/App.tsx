import "../firebaseConfig";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import BackgroundImg from "./assets/images/deco.png";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Board from "./pages/Board";
import BoardWrite from "./components/Board/BoardWrite";
import Boarddetail from "./components/Board/BoardDetail";
import MyPage from "./pages/MyPage";
import List from "./pages/List";

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
          <Route path="/Mypage" element={<MyPage />} />
          <Route path="/Boardwrite" element={<BoardWrite />} />
          <Route path="/Boarddetail/:id" element={<Boarddetail />} />
          <Route path="/List" element={<List />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
