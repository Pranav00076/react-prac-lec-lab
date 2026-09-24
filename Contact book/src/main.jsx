import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contacts.jsx'
import Land from './components/Land.jsx'
import ContactDetail from './components/ContactDetail.jsx'
import "./index.css"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Land />
  },
  {
    path:"/home",
    element: <Home />
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path:"/contact",
    element: <Contact />
  },
  {
    path:"/contact/:contactid",
    element: <ContactDetail />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
