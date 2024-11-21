import { useState ,useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'
function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = ()=>{
    setThemeMode("light");
  }
  const darkTheme = ()=>{
    setThemeMode('dark');
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light" ,'dark')
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  
  return (
    <>
      {/* <h1 className='p-4 bg-pink-400 text-center text-4xl text-gray-950'>Chai</h1> */}
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                  <Card/> 
                </div>
            </div>
        </div>
        </ThemeProvider>
    </>
  )
}

export default App
