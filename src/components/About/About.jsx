import React from 'react';
import AlienType from "../../assets/imgs/about-page/alien-type.png";
import DiscordLogo from "../../assets/imgs/about-page/discord.png";
import Logo from "../../assets/imgs/about-page/7art.png";
import Robots from "../../assets/imgs/about-page/robots.png";
import StoreBackground from "../../assets/imgs/about-page/store-background.png";
import "./About.css";

const About = () => {
  return (
    <div className='about'>
        <div className="container">
            <div className="content">

                <div className="alien-type">
                    <div className="alien-type-content">
                        <h1>ALIEN TYPE NFTS</h1>
                        <p> 
                            you can visit LUCKY BEINGS store and explore
                            alien type NFTS You can also get FREE MINT
                            By visiting the Instagram page and 
                            Follow @lucky beings
                            Like post of free mint 
                            Tag 3 NFT Friends
                        </p>
                    </div>
                    <img src={AlienType} alt="" />
                </div>

                <div className="discord">
                    <img src={Logo} alt="" />
                    <div className="inner">
                        <img src={DiscordLogo} alt="" />
                    </div>
                </div>

                <div className="store">
                    <img src={StoreBackground} alt="" />
                    <div className="store-content">
                        <h1>LUCKY BEINGS STORE</h1>
                        <p>
                            you can buy any LUCKY BEINGS type
                            from our store Or directly from Opensea
                        </p>
                    </div>
                </div>

                <div className="robots">
                    <div className="robots-content">
                        <h1>ROBOTS NFTS</h1>
                        <p> 
                            You can get robots type NFTS
                            at a lower cost and fee 
                            Plus a good cards
                        </p>
                    </div>
                    <img src={Robots} alt="" />
                </div>

                <div className="game">  
                    <h1>THE GAME</h1>
                    <p>  
                        LUCKY BEINGS is card game
                        It consists of 12 different cards
                        and The winner is the one who stores 
                        the most cards
                        The game is inspired by the famous game Rock Paper Scissors 
                        Click here to learn more about the game
                    </p>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default About