import React from 'react'
import Illustration from "../../assets/imgs/join/main-photo.png"
import "./Join.css"

const Join = () => {
  return (
    <div className="Join">
        <div className="container">
            <div className="left-side">
                <div className="content">
                    <h1>JOIN THE COMMUNITY</h1>
                    <p>Join our Discord channel or follow us on Twitter keep up to date with our latest work and announcements.</p>
                    <div className="links">
                        <a href="https://discord.gg/ZUYSc64vTj" className='discord' target="_blank" rel="noreferrer">Join Discord <span>&#62;</span></a>
                        <a href="https://twitter.com/ahmedbaroud20" className='twitter' target="_blank" rel="noreferrer">Follow on Twitter <span>&#62;</span></a>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <img src={Illustration} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Join