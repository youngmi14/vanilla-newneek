// import { createContext, useState, useContext } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   // 다크모드 상태관리
//   const [isDark, setIsDark] = useState(false);

//   // 다크모드 상태 토글 함수
//   const toggleDark = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <ThemeContext.Provider value={{isDark, toggleDark}}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }