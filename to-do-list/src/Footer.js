import React, {useContext} from "react";
import './Footer.css';
import {ThemeContext} from './ThemeContext';

function Footer(){
    const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

    const style = isLightTheme ? {color: lightTheme.altColor, backgroundColor: lightTheme.footerColor} : {color: darkTheme.color, backgroundColor: darkTheme.footerColor}

    return (
        <div className="footer" style={style}>
            <p>a simple todo app.</p>
        </div>
    );
}

export default Footer;