import "./App.css";
import Header from "./core/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
import { PATHS } from "./helpers/paths";
import Footer from "./core/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="container-md">
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.EPISODES} element={<Episodes />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
