import React from 'react'
import Illustration1 from "../../assets/imgs/gallery-page/1.png"
import Illustration2 from "../../assets/imgs/gallery-page/2.png"
import Illustration3 from "../../assets/imgs/gallery-page/3.png"
import Illustration4 from "../../assets/imgs/gallery-page/4.png"
import Illustration5 from "../../assets/imgs/gallery-page/5.png"
import "./GalleryPage.css"

const GalleryPage = () => {
  return (
    <div className='gallery-page'>
        <img src={Illustration1} alt="" />
        <img src={Illustration2} alt="" />
        <img src={Illustration3} alt="" />
        <img src={Illustration4} alt="" />
        <img src={Illustration5} alt="" />
    </div>
  )
}

export default GalleryPage