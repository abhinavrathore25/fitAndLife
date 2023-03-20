import React from 'react';
import fitAndLifeLogo from '../Resources/fitAndLifeLogo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"> <img src={fitAndLifeLogo} className="logo" alt="img"></img> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#plans">Plans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact Us</a>
                        </li>
                    </ul>
                    <button className='joinNowButton' href='#plans'>Join Now</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;