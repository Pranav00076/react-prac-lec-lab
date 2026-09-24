import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Teams from './components/Teams'
import Blogs from './components/Blogs'
import Newsletter from './components/NewsLetter'
import Testimonials from './components/Testimonials'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />
  },
  {
    path: "/teams",
    element: <Teams />
  },
  {
    path: "/blogs",
    element: <Blogs />
  },
  {
    path: "/newsletter",
    element: <Newsletter />
  },
  {
    path: "/testimonials",
    element: <Testimonials />
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>,
)
