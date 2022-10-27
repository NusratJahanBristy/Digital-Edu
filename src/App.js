import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer position='top-center'></ToastContainer>
    </div>
  );
}

export default App;
