import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from './store';
import { GlobalStyle, theme } from './styles/global';
import Routes from './routes';
import ConfigToast from './components/ConfigToast';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <ConfigToast />
          <Routes />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
