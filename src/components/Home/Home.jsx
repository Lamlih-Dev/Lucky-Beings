import React, { useEffect, useState } from 'react'
import Navigation from "../Navigation/Navigation";
import InstagramLogo from "../../assets/imgs/home-page/instagram.png";
import FacebookLogo from "../../assets/imgs/home-page/facebook.png";
import TwitterLogo from "../../assets/imgs/home-page/twitter.png";
import DiscordLogo from "../../assets/imgs/home-page/discord.png";
import UpLogo from "../../assets/imgs/home-page/up.png";
import DownLogo from "../../assets/imgs/home-page/down.png";
import Illustration1 from "../../assets/imgs/home-page/Illustration 1.png";
import Illustration2 from "../../assets/imgs/home-page/Illustration 2.png";
import Illustration3 from "../../assets/imgs/home-page/Illustration 3.png";
import Illustration4 from "../../assets/imgs/home-page/Illustration 4.png";
import Illustration5 from "../../assets/imgs/home-page/Illustration 5.png";
import SubIllustration1 from "../../assets/imgs/home-page/sub-illustration-1.png";
import SubIllustration2 from "../../assets/imgs/home-page/sub-illustration-2.png";
import SubIllustration3 from "../../assets/imgs/home-page/sub-illustration-3.png";
import "./Home.css"

export const HomePrototype = ({ illu, setillu, background, mainPhoto, subPhoto, headerText }) => {

  useEffect(()=>{
    const topSide = document.querySelector(".home .top-side");
    topSide.classList = "top-side";
    topSide.classList.add(background)
  },[background])

  const handleClick = (action) => {
    const items = document.querySelectorAll(".left-pagination .slide-container .item");
    const logoTop = document.querySelector(".navbar-brand .top-side");
    const logobottom = document.querySelector(".navbar-brand .bottom-side");

    const animateLogo = () => {
      logoTop.classList.toggle("active");
      logobottom.classList.toggle("active");
    }

    if (action === "prev") {
      for (var i = 0; i < items.length; i++) {
        if (items[i].className.includes("active")) {
          if (i !== 0) {
            items[i].classList.remove("active");
            items[i - 1].classList.add("active");
            animateLogo();
            setillu(illu - 1); 
            break;
          }
          }
      }
    }
    else {
      for (var i = 0; i < items.length; i++) {
        if (items[i].className.includes("active")) {
          if (i !== items.length - 1) {
            items[i].classList.remove("active");
            items[i + 1].classList.add("active");
            animateLogo();
            setillu(illu + 1); 
            break;
          }
        }
      }
    }
  }

  return(
    <div className='home'>
      <div className="left-pagination">
        <div className="slide-container">
          <div id="prev">
            <img src={UpLogo} alt="up" onClick={()=>handleClick("prev")}/>
          </div>
          <div className="item item1">01</div>
          <div className="item item2">02</div>
          <div className="item item3 active">03</div>
          <div className="item item4">04</div>
          <div className="item item5">05</div>
          <div id="next">
            <img src={DownLogo} alt="up" onClick={()=>handleClick("next")} />
          </div>
        </div>
      </div>
      <div className="illustration">
        <img src={mainPhoto} alt="illustration" />
        <div className="stats">
          <img src={subPhoto} alt="" />
          <div className="stats-content">
            <div className="number-nft">
              <div className="number">80</div>
              <p>Number of NFT</p>
            </div>
            <div className="rarity">
              <div className="number">50%</div>
              <p>Rarity</p>
            </div>
            <div className="collection">
              <div className="number">1000</div>
              <p>Collection</p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-side">
          <div className="content">
              <h1>{headerText}</h1>
              <p>NFTS</p>
          </div>
      </div>
      <div className="bottom-side">
        <div className="social-media">
          <a href="https://www.instagram.com/lucky.beings/" target="_blank" rel="noreferrer"><img src={InstagramLogo} alt="instagram" /></a>
          <a href="https://twitter.com/ahmedbaroud20" target="_blank" rel="noreferrer"><img src={TwitterLogo} alt="twitter" /></a>
          <a href="https://discord.gg/ZUYSc64vTj" target="_blank" rel="noreferrer"><img src={DiscordLogo} alt="discord" /></a>
          <a href="#" target="_blank" rel="noreferrer"><img src={FacebookLogo} alt="facebook" /></a>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  const [illustration, setIllustration] = useState(3);

  const renderHome = (number) => {
    switch(number){
      case 1:
        return <HomePrototype illu={illustration} setillu={setIllustration} background="illu1" mainPhoto={Illustration2} subPhoto={SubIllustration2} headerText="WITCHES" />;
      case 2:
        return <HomePrototype illu={illustration} setillu={setIllustration} background="illu2" mainPhoto={Illustration3} subPhoto={SubIllustration3} headerText="ALIENS" />;
      case 3:
        return <HomePrototype illu={illustration} setillu={setIllustration} background="illu3" mainPhoto={Illustration1} subPhoto={SubIllustration1} headerText="HEROES" />;
      case 4:
        return <HomePrototype illu={illustration} setillu={setIllustration} background="illu4" mainPhoto={Illustration4} subPhoto={SubIllustration1} headerText="HUMANS" />;
      case 5:
        return <HomePrototype illu={illustration} setillu={setIllustration} background="illu5" mainPhoto={Illustration5} subPhoto={SubIllustration1} headerText="ROBOTS" />;
      default:
        return <HomePrototype illu={illustration} setillu={setIllustration} background="illu3" mainPhoto={Illustration1} subPhoto={SubIllustration1} headerText="HEROES" />;
    }
  }

  return (
    <React.Fragment>
      <Navigation />
      {renderHome(illustration)}
    </React.Fragment>
  );
}

export default Home