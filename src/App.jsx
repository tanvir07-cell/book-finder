import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
