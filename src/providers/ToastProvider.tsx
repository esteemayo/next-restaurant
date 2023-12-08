import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = () => {
  return (
    <ToastContainer position='bottom-right' theme='dark' autoClose={3000} />
  );
};

export default ToastProvider;
