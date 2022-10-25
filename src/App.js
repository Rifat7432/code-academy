
import { createContext } from 'react';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';
export const themeContext = createContext('')

function App() {
  const [theme,setTheme] = useState(true);
  const webThem = {theme,setTheme};
  return (
   <themeContext.Provider value={webThem}>
     <div className={`App ${theme ? " bg-light text-black-50": "bg-dark bg-gradient text-white"}`}>
       <RouterProvider router={router} ></RouterProvider>
    </div>
   </themeContext.Provider>
  );
}

export default App;
