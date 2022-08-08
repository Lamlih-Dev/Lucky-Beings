import React from 'react'
import InstagramLogo from "../../assets/imgs/home-page/instagram.png";
import FacebookLogo from "../../assets/imgs/home-page/facebook.png";
import TwitterLogo from "../../assets/imgs/home-page/twitter.png";
import DiscordLogo from "../../assets/imgs/home-page/discord.png";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="logo">
                        <h1>LUCKY <br /> BEINGS</h1>
                    </div>
                </div>
                <div className="col-md-4">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">NFT'S</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="social-media">
                        <a href="https://www.instagram.com/lucky.beings/" target="_blank" rel="noreferrer"><img src={InstagramLogo} alt="instagram" /></a>
                        <a href="https://twitter.com/ahmedbaroud20" target="_blank" rel="noreferrer"><img src={TwitterLogo} alt="twitter" /></a>
                        <a href="https://discord.gg/ZUYSc64vTj" target="_blank" rel="noreferrer"><img src={DiscordLogo} alt="discord" /></a>
                        <a href="#" target="_blank" rel="noreferrer"><img src={FacebookLogo} alt="facebook" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p className='text-center'>Lucky Beings @2022. All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer