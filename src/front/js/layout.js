import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Inicio } from "./pages/inicio";
import { AboutMe } from "./pages/about-me";
import { Contact } from "./pages/contact";
import { Proyectos } from "./pages/proyectos";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Inicio />} path="/" />
            <Route element={<AboutMe />} path="/about-me" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Proyectos />} path="/proyectos" />
            <Route element={<h1> Not found! </h1>} />
          </Routes>{" "}
          <Footer />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

export default injectContext(Layout);
