import React from 'react'
import Illustration from "../../assets/imgs/game-page/illustration.png"
import MainIllustration from "../../assets/imgs/game-page/main.png"
import "./Game.css"

const Game = () => {
  return (
    <div className='game'>
        <div className="container">
            <div className="left-side">
                <div className="logo">
                    <h1>LUCKY <br /> BEINGS</h1>
                    <div className="line"></div>
                </div>
                <p>
                    lucky beings nfts is a happy collection of 1.000 characters 
                    Each lucky being is unique and programmatically 
                    generated from over 150 possible traits, 
                    including expression, headwear, clothing, and more. 
                    with some rarer than others
                    Which will give you many features
                    In the game play to earn that will be released in 2024
                </p>
                <p>
                    Lucky beings are divided into five types:
                    <ol>
                        <li>1 - Heroes.</li>
                        <li>2 - Witches.</li>
                        <li>3 - Aliens.</li>
                        <li>4 - Humans.</li>
                        <li>5 - Robots.</li>
                    </ol>
                    Each type is ahead of the other in terms of cards ! 
                </p>
                <div className="illustration-container">
                    <img src={Illustration} alt="" />
                </div>
            </div>
            <div className="right-side">
                <img src={MainIllustration} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Game