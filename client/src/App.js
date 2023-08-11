import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Log from './pages/Log';
import Register from './pages/Register';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Log />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
        </Provider>
    </>
  )
}

export default App