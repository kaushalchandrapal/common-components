<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
=======
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'
import { SettingsProvider, ThemeSettings } from './components/settings'
import ScrollToTop from './components/scroll-to-top/ScrollToTop'
import Router from './routes';
import ThemeProvider from './theme';
import { MotionLazyContainer } from './components/animate';
import SnackbarProvider from './components/snackbar/SnackbarProvider';
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< Updated upstream
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
      <HelmetProvider>
        <SettingsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <MotionLazyContainer>
              <ThemeProvider>
                <ThemeSettings>
                  <SnackbarProvider>
                    <Router />
                  </SnackbarProvider>
                </ThemeSettings>
              </ThemeProvider>
            </MotionLazyContainer>
          </BrowserRouter>
        </SettingsProvider>
      </HelmetProvider>
>>>>>>> Stashed changes
    </>
  )
}

export default App
