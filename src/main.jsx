import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Bookings from './pages/Bookings.jsx'
import Blogs from './pages/Blogs.jsx'
import DoctorDetails from './pages/DoctorDetails.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/bookings",
        element: <Bookings />
      },
      {
        path: "/my-bookings",
        element: <Bookings />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/doctors/:id",
        element: <DoctorDetails />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)