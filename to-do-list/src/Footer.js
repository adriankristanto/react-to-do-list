import React, {useContext} from "react";
import './Footer.css';
import {ThemeContext} from './ThemeContext';
import ThemeToggle from './ThemeToggle';

function Footer(){
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

    const style = isLightTheme ? {color: lightTheme.color, backgroundColor: lightTheme.footerColor} : {color: darkTheme.color, backgroundColor: darkTheme.footerColor}

    return (
        <div className="footer" style={style}>
            <p>a simple todo app.</p>
            <ThemeToggle />
        </div>
    );
}

export default Footer;