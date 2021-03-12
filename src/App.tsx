import { GlobalStyle, theme } from './styles/global';
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import { Provider } from 'react-redux'
import { store } from './store';

function App() {

  const ConfigToast = () => <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
  
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
