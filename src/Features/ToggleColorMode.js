import React, { createContext, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react';

export const colorModeContext = createContext();

const ToggleColorMode = ({ children }) => {

    const [mode, setMode] = useState('light')

    const ToggleColorMode = () => {
        setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')
    };

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        }
    })


        , [mode])


    return (
        <colorModeContext.Provider value={{ mode, setMode, ToggleColorMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </colorModeContext.Provider>
    )
}

export default ToggleColorMode