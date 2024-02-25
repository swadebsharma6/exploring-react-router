import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Pages/Contact'
import EditContact from './Pages/EditContact'
import ErrorPage from './Pages/ErrorPage'
import Root from './Root/Root'
import { createContactsAction } from './components/action'
import { getContactLoader, getContactsLoader } from './components/loader'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement:<ErrorPage/>,
    loader: getContactsLoader,
    action:createContactsAction,
    children: [
      {
        path: '/contacts/:contactId',
        element: <Contact/>,
        loader: getContactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
      },
    ]
  },

  
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
