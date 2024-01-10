import React from 'react'
import "./styles.modules.scss"
import LogoHome from "../../assets/images/img.jpg"



export default function Home() {
    return (
        <div className='home'>

            <div className="logo-home">
                <img src='LogoHome' alt="Logo da Home" className="img-home" />
            </div>        
        </div>
    );
}
