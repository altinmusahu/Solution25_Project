import React from "react";
import Header from "./components/header/Header";
import background1 from "./Assets/background1.png"
import Home from "./components/landingpage/Home";
import Container from "./components/landingpage/Container";

function App() {
  return (
    <>
      <div>
        <img src={background1} className="absolute inset-0  w-full h-auto object-cover" alt="Background" />

        <div className="relative ">
          <Header />
          <Home />
        </div>
      </div>


      <div>
        <Container />
      </div>
    </>
  );
}

export default App;
