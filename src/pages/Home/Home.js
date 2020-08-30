import React from 'react';
import './Home.css';
import Action from '../../components/HomeComp/Action'
import Navbar from '../../components/HomeComp/NavbarHome';

function Home() {
    return (
        <div className="container-fluid HomeBackground">
            <Navbar/>
            {/* my-auto d-flex flex-row justify-content-center */}
            <div className="d-flex flex-row justify-content-center h-75  ">
            <Action/>
            </div>
            <div className="d-flex flex-column align-content-bottom px-5" style={{color:"#0077B5"}}><small>* Pls Enter any Number and Name to Enter</small></div>
        </div>
    )
}

export default Home
