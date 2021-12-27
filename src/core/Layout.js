import { Routes, Route } from "react-router-dom";
import { PATHS } from "./../helpers/paths";
import Footer from "./Footer";
import Episodes from "./../pages/Episodes";
import Header from "./Header";
import Home from "./../pages/Home";
import PrincipalCharsVotes from "../pages/PrincipalCharsVotes";
const NoMatch = () => <div>No match</div>

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container-md">
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.EPISODES} element={<Episodes />} />
          <Route path={PATHS.VOTES} element={<PrincipalCharsVotes />} />
          <NoMatch default />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
