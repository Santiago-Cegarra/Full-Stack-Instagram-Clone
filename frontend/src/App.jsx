import path from 'path'
import Signup from './components/Signup'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import MainLayout from './components/MainLayout'
import Login from './components/Login'


const browserRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      }
    ]
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/signup',
    element: <Signup/>
  }
])

function App() {
  return (
    <>
     <RouterProvider router={browserRouter}/>
    </>
  )
}

export default App
