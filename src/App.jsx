

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AuthLayout from './layout/AuthLayout.jsx';
import GuestLayout from './layout/GuestLayout';


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <GuestLayout>
          <LoginPage />
        </GuestLayout>
        
    },
    {
      path: '/register',
      element:
        <GuestLayout>
          <RegisterPage />
        </GuestLayout>
        
    },
    {
      path: '/home',
      element:
        <AuthLayout>
          <HomePage />
        </AuthLayout>

    },
  ])


  return (<RouterProvider router={router} />)
}

export default App
