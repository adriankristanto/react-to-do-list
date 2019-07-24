import React, { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props){
    const light = {
        color: '#0A0A0A',
        itemBackground: '#D0D0D0',
        itemBackgroundOnHover: '#B0B0B0',
        backgroundColor: '#E6E6E6',
        emptyColor: '#B0B0B0',
        footerColor: 'white'
    }
    const dark = {
        color: 'whitesmoke',
        itemBackground: '#282828',
        itemBackgroundOnHover: '#404040',
        backgroundColor: '#191919',
        emptyColor: '#404040',
        footerColor: 'black'
    }
    
    const themePref = JSON.parse(localStorage.getItem('theme-pref'))
    const [state, setState] = useState({ isLightTheme: themePref ? themePref.isLightTheme : false,  lightTheme: light, darkTheme: dark });

    function changeTheme(){
        setState(prev => ({
            isLightTheme: !prev.isLightTheme,
            lightTheme: light,
            darkTheme: dark
        }))
    }

    useEffect(()=>{
        window.addEventListener('beforeunload', () => localStorage.setItem('theme-pref', JSON.stringify({isLightTheme: state.isLightTheme})));
        return () => window.removeEventListener('beforeunload', () => localStorage.setItem('theme-pref', JSON.stringify({isLightTheme: state.isLightTheme})));
    });

    return(
        <ThemeContext.Provider value={{...state, changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;