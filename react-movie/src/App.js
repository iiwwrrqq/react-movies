import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./container/Main/Main";
import Header from "./Layout/Header/Header";
import ViewMore from "./components/ViewMore/ViewMore";
import Details from "./components/Details/Details";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/view-more" element={<ViewMore />} />
        <Route path="/details/:movieId" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
