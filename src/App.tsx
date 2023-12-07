import { Routes, Route } from "react-router-dom";
import "../firebaseConfig";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
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
  );
}

export default App;
