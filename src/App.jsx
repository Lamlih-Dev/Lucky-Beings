import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Game from "./components/Game/Game";
import DroppingSoon from "./components/DroppingSoon/DroppingSoon";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import FAQ from "./components/FAQ/FAQ";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
import React from 'react';

function App() {

  return (
    <div className="app">
      <Home />
      <About />
      <Game />
      <DroppingSoon />
      <GalleryPage />
      <FAQ />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
