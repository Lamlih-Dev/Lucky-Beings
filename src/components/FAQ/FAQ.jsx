import React from 'react'
import Illustration from "../../assets/imgs/faq/faq-img.png"
import "./FAQ.css"

const FAQ = () => {
  return (
    <div className='faq'>
        <div className="container">
            <div className="left-side">
                <img src={Illustration} alt="" />
            </div>
            <div className="right-side">
                <h1>YOUR QUESTIONS, <br />ANSWERED.</h1>
                <div className="content">
                    <ul>
                        <li data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                            WHAT'S AN NFT?.
                            <span>+</span>
                        </li>
                        <div class="collapse" id="collapse1">
                            <div class="card card-body">
                                Comming Soon !
                            </div>
                        </div>
                        <li data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                            WHAT MAKES LUCKY BEINGS SPECIAL?
                            <span>+</span>
                        </li>
                        <div class="collapse" id="collapse2">
                            <div class="card card-body">
                                Comming Soon !
                            </div>
                        </div>
                        <li data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                            WHO'S THE TEAM BEHIND LUCKY BEINGS NFT?
                            <span>+</span>
                        </li>
                        <div class="collapse" id="collapse3">
                            <div class="card card-body">
                                Comming Soon !
                            </div>
                        </div>
                        <li data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            WHEN DOES MINTING BEGIN?
                            <span>+</span>
                        </li>
                        <div class="collapse" id="collapse4">
                            <div class="card card-body">
                                Comming Soon !
                            </div>
                        </div>
                        <li style={{borderBottom:"1px solid #8E8E8E"}} data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                            WHO CAN MINT ONE?
                            <span>+</span>
                        </li>
                        <div class="collapse" id="collapse5">
                            <div class="card card-body">
                                Comming Soon !
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ