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
import AdminDashboard from './admin/AdminDashboard';
import UserDashboard from './user/UserDashboard';
import AdminRoute from './components/AdminRoute';
import UserRoute from './components/UserRoute';
import Layout from './admin/global/Layout'
import EditPost from './admin/EditPost';
import CreatePost from './admin/CreatePost';

//HOC
const AdminDashboardHOC = Layout(AdminDashboard);
const UserDashboardHOC = Layout(UserDashboard);
const CreatePostHOC = Layout(CreatePost);
const EditPostHOC = Layout(EditPost);

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
              <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
              <Route path='/admin/post/create' element={<AdminRoute><CreatePostHOC /></AdminRoute>} />
              <Route path='/admin/post/edit/:id' element={<AdminRoute><EditPostHOC /></AdminRoute>} />
              <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC /></UserRoute>} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
        </Provider>
    </>
  )
}

export default App