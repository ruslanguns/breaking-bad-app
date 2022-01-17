import { Routes, Route } from "react-router-dom";
import { PATHS } from "./../helpers/paths";
import Footer from "./Footer";
import Episodes from "./../pages/Episodes";
import Header from "./Header";
import AllCharacters from "../pages/AllCharacters";
import PrincipalCharsVotes from "../pages/PrincipalCharsVotes";
import { Details } from "../pages/Details";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container-md">
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ALL_CHARACTERS} element={<AllCharacters />} />
          <Route path={PATHS.EPISODES} element={<Episodes />} />
          <Route path={PATHS.DETAILS} element={<Details />} />
          <Route path={PATHS.VOTES} element={<PrincipalCharsVotes />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
