import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NavBar from "./components/navbar/NavBar";
import Project from "./components/project/Project";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Project />
    </>
  );
}

export default App;
