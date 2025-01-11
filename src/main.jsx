import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskPage from './pages/TaskPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/task",
    element: <TaskPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
