import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props){
    const light = {
        color: 'black',
        itemBackground: '#D3D3D3',
        itemBackgroundOnHover: 'blue',
        backgroundColor: 'whitesmoke',
        emptyColor: 'lightgrey'
    }
    const dark = {
        color: 'whitesmoke',
        itemBackground: '#282828',
        itemBackgroundOnHover: '#404040',
        backgroundColor: '#191919',
        emptyColor: '#404040'
    }
    const [state, setState] = useState({ isLightTheme: false,  lightTheme: light, darkTheme: dark });

    return(
        <ThemeContext.Provider value={state}>
            {props.children}
        </ThemeContext.Provider>
    );
}