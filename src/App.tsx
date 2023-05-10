import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'
import { SettingsProvider, ThemeSettings } from './components/settings'
import ScrollToTop from './components/scroll-to-top/ScrollToTop'
import Router from './routes';
import ThemeProvider from './theme';

function App() {

  return (
    <>
      <HelmetProvider>
        <SettingsProvider>
          <BrowserRouter>
            <ThemeProvider>
              <ThemeSettings>
                <ScrollToTop />
                <Router />
              </ThemeSettings>
            </ThemeProvider>
          </BrowserRouter>
        </SettingsProvider>
      </HelmetProvider>
    </>
  )
}

export default App
