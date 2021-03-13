import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function ConfigToast() {
  return <ToastContainer
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
}

