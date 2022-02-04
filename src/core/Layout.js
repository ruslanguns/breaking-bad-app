import React from "react";
import { Routes, Route } from "react-router-dom";
import { PATHS } from "./../helpers/paths";
import loadable from "@loadable/component";

import Footer from "./Footer";
import Header from "./Header";
const AllCharacters = loadable(() => import('./../pages/AllCharacters'));
const Episodes = loadable(() => import('./../pages/Episodes'));

const PrincipalCharsVotes = loadable(() => import('./../pages/PrincipalCharsVotes'));
const Details = loadable(() => import('./../pages/Details'));
const Home = loadable(() => import('./../pages/Home'));

// https://benestudio.co/how-to-lazy-load-your-react-components/
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
