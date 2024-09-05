function Header(){
    return(
    <header>
        <div className="logo">Dev Mfundo</div>
        <div className="nav-bar">
            <div className="navbar" id="navbar">
                <a href="#about-me">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
        <div className="menu-toggle" id="menu-toggle">
            <div id="greenish"></div>
            <div id="yellowish"></div>
            <div id="blueish"></div>
        </div>
    </header>
    )
}
export default Header;