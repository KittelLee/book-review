import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "../firebaseConfig";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BackgroundImg from "./assets/images/deco.png";
import MyPage from "./components/Profile/MyPage";
import Board from "./pages/Board";
import BoardWrite from "./components/Board/BoardWrite";
import Boarddetail from "./components/Board/BoardDetail";

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
       
        */}
          <Route path="/Mypage" element={<MyPage />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Boardwrite" element={<BoardWrite />} />
          <Route path="/Boarddetail/:id" element={<Boarddetail />} />

          <Route path="/Login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
