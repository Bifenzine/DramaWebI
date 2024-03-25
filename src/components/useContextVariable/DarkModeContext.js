// import { Children, createContext, useContext, useEffect, useState } from "react";

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ Children }) => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     useEffect(() => {
//         const savedMode = localStorage.getItem('mode');
//         setIsDarkMode(savedMode === 'dark');

//     }, []);

//     const toggleDarkMode = () => {
//         const newMode = !isDarkMode;
//         setIsDarkMode(newMode);
//         localStorage.setItem('mode', newMode ? 'dark' : 'light');
//         document.documentElement.classList.toggle('dark', newMode);
//     };



//     return (
//         <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//             {Children}
//         </DarkModeContext.Provider >
//     )
// }

// export const useDarkMode = () => {
//     return
//     useContext(DarkModeContext);

// };





