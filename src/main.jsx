import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layouts/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';

import AllJobs from './Components/AllJobs/AllJobs';
import JobDetails from './Components/JobDetails/JobDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch('/job.json')
      },
      {
        path: "/job/:Id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/job.json")
      },
      {
        path:"statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"appliedjobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:"blog",
        element: <Blog></Blog>
      }
      
      
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
