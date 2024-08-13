import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import BlogDetails from './components/BlogDetails.jsx';
import BookMark from './components/BookMark.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './components/AuthProvider.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import ReadTimeChart from './components/ReadTimeChart.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Privacy from './components/Privacy.jsx';
import GetTouch from './components/GetTouch.jsx';
import TabBlog from './components/TabBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <TabBlog/>
      },
      {
        path: '/blog/:id',
        element: <BlogDetails />
      },
      {
        path: '/bookmark',
        element: <PrivateRoute><BookMark /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/readtime',
        element: <PrivateRoute><ReadTimeChart/></PrivateRoute>
      },
      {
        path: '/privacy',
        element: <Privacy/>
      },
      {
        path: '/contact',
        element: <GetTouch/>
      }
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer />
    </div>
  </React.StrictMode>,
)
