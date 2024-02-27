import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Pages/Contact'
import EditContact from './Pages/EditContact'
import ErrorPage from './Pages/ErrorPage'
import Root from './Root/Root'
import Index from './components/Index'
import { createContactsAction, deleteContactAction, editContactAction } from './components/action'
import { getContactLoader, getContactsLoader } from './components/loader'
import { UpdateContactFavorite } from './contacts'
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
        errorElement: <ErrorPage/>,
        children: [
          { index: true, 
            element: <Index/>
           },
          {
            path: '/contacts/:contactId',
            element: <Contact/>,
            loader: getContactLoader,
            action: UpdateContactFavorite
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction
          },
          {
            path: "contacts/:contactId/destroy",
            action: deleteContactAction,
            errorElement: <div>Oops! There was an error Deleting the Contact</div>
          },
        ]
      }
    ]
  },

  
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
