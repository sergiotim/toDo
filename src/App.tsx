import "./App.css";
import { Home } from "./pages/home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";

function App() {
  return (
    <Router>
      <div className="main-container d-flex flex-column">
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
