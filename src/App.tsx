import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'
import { SettingsProvider, ThemeSettings } from './components/settings'
import ScrollToTop from './components/scroll-to-top/ScrollToTop'
import Router from './routes';
import ThemeProvider from './theme';
import { MotionLazyContainer } from './components/animate';
import { SnackbarProvider } from './components/snackbar';

function App() {

  return (
    <>
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
    </>
  )
}

export default App
