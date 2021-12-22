import "./App.css";
import Header from "./core/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
function App() {
  return (
    <>
      <Header />
      <div class="container-md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="episodes" element={<Episodes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
