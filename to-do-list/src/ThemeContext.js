import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props){
    const light = {
        color: 'black',
        altColor: 'whitesmoke',
        itemBackground: '#D3D3D3',
        itemBackgroundOnHover: 'blue',
        backgroundColor: 'whitesmoke',
        emptyColor: 'lightgrey',
        footerColor: 'blue'
    }
    const dark = {
        color: 'whitesmoke',
        altColor: 'black',
        itemBackground: '#282828',
        itemBackgroundOnHover: '#404040',
        backgroundColor: '#191919',
        emptyColor: '#404040',
        footerColor: 'black'
    }
    const [state, setState] = useState({ isLightTheme: false,  lightTheme: light, darkTheme: dark });

    return(
        <ThemeContext.Provider value={state}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;