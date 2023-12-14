import "../firebaseConfig";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import BackgroundImg from "./assets/images/deco.png";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BackgroundImg from "./assets/images/deco.png";
import Board from "./pages/Board";
import BoardWrite from "./components/Board/BoardWrite";
import Boarddetail from "./components/Board/BoardDetail";
import MyPage from "./pages/MyPage";
import List from "./pages/List";
import Search from "./pages/Search";
import Board from "./pages/Board";


  
  
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
          
          <Route path="/Boardwrite" element={<BoardWrite />} />
          <Route path="/Boarddetail/:id" element={<Boarddetail />} />
          <Route path="/List" element={<List />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Board" element={<Board />} />           
          <Route path="/Login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
