import React from 'react';
import fitAndLifeLogo from '../Resources/fitAndLifeLogo.png';

const Navbar = ({showLogin, setShowLogin}) => {
    const userMessage = 'Hi, I am interested in joining FitAndLife. Can we get in touch?';

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
                        <li className="nav-item">
                            {/* <button style={{backgroundColor:'transparent', border:'none'}}> */}
                            <a className="nav-link" href='#' onClick={() => setShowLogin(!showLogin)}>Login</a>
                            {/* </button> */}
                        </li>
                    </ul>
                    <button className='joinNowButton'>
                        <a href={`https://wa.me/+919305869074?text=${userMessage}`} 
                        target='_blank' rel='noreferrer' style={{textDecoration:'none', color: '#000'}}>Join Now</a>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;