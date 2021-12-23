
import { Routes, Route } from "react-router-dom";
import { PATHS } from "./../helpers/paths";
import Footer from "./Footer";
import Episodes from "./../pages/Episodes";
import Header from "./Header";
import Home from "./../pages/Home";

const Layout = () => {
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

export default Layout;
