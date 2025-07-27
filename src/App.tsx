import "./App.css";
import { Home } from "./pages/home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Auth } from "./pages/login";
import { useEffect, useState } from "react";

function AppContent() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleLoginSuccess() {
    setIsLogged(true);
    navigate("/");
  }

  function handleLogout() {
    localStorage.removeItem("accessToken");
    setIsLogged(false);
    navigate("/login");
  }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLogged(true);
      navigate("/");
    } else {
      setIsLogged(false);
      navigate("/login");
    }
  }, []);

  return (
    <div className="main-container d-flex flex-column">
      <Header></Header>

      <Routes>
        <Route
          path="/login"
          element={
            isLogged ? (
              <Home onLogout={handleLogout}></Home>
            ) : (
              <Auth onLoginSuccess={handleLoginSuccess}></Auth>
            )
          }
        ></Route>

        <Route
          path="/"
          element={
            isLogged ? (
              <Home onLogout={handleLogout}></Home>
            ) : (
              <Auth onLoginSuccess={handleLoginSuccess}></Auth>
            )
          }
        ></Route>

        <Route
          path="*"
          element={
            isLogged ? (
              <Home onLogout={handleLogout}></Home>
            ) : (
              <Auth onLoginSuccess={handleLoginSuccess}></Auth>
            )
          }
        ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

function App() {
  return (<Router>
    <AppContent></AppContent>
  </Router>)
}

export default App;
