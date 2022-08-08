import React from 'react'
import SearchLogo from "../../assets/imgs/home-page/search.png"
import Logo from "../../assets/imgs/mini-logo.png"
import "./Navigation.css"

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="./">
                    <img className='top-side' src={Logo} alt="logo-fra" width="25px" height="25px" />
                    <img className='bottom-side' src={Logo} alt="logo-fra" width="25px" height="25px" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link" href="./">Home</a>
                        <a class="nav-link" href="./">NFT'S</a>
                        <a class="nav-link" href="./">About Us</a>
                        <a class="nav-link" href="./">FAQ</a>
                        <a class="nav-link" href="./">
                            <img src={SearchLogo} alt="search" width="25px" height="25px"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation