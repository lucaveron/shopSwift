import "./App.css";
import NavbarShopSwift from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarShopSwift />
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
