import "./App.css";
import Header from "./core/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
function App() {
  const paths =  {
    home: '/breaking-bad-app/',
    episodes: '/breaking-bad-app/episodes'
  };
  return (
    <>
      <Header />
      <div className="container-md">
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.episodes} element={<Episodes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
