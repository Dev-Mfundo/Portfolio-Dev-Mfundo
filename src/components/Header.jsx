import { memo, useState } from 'react';

function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header>
            <div className="logo">Dev Mfundo</div>
            <div className={`nav-bar ${isNavVisible ? 'show' : ''}`}>
                <div className="navbar" id="navbar">
                    <a href="#about-me">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div className="menu-toggle" id="menu-toggle" onClick={toggleNav}>
                <div id="greenish"></div>
                <div id="yellowish"></div>
                <div id="blueish"></div>
            </div>
        </header>
    );
}

export default memo(Header);
