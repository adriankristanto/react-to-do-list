import React, {useContext, useState} from 'react';
import './ThemeToggle.css';
import { ThemeContext } from './ThemeContext';

function ThemeToggle(){
    const {isLightTheme, lightTheme, darkTheme, changeTheme} = useContext(ThemeContext)
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const style = isLightTheme ? 
    (isMouseEnter ? {backgroundColor: lightTheme.itemBackgroundOnHover, color: lightTheme.color} : {backgroundColor: 'Transparent', color: lightTheme.color}) : 
    (isMouseEnter ? {backgroundColor: darkTheme.itemBackgroundOnHover, color: darkTheme.color} : {backgroundColor: 'Transparent', color: darkTheme.color})

    return (
        <button className='theme-toggle' onClick={changeTheme} style={style} onMouseEnter={() => setIsMouseEnter(true)} onMouseLeave={() => setIsMouseEnter(false)}>
            Change Theme
        </button>
    );
}

export default ThemeToggle;