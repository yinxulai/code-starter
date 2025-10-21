import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/Layout'
import MainPage from '../pages/main'
import MCPPage from '../pages/mcp'
import ProviderPage from '../pages/provider'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'mcp',
        element: <MCPPage />,
      },
      {
        path: 'provider',
        element: <ProviderPage />,
      },
    ],
  },
])

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter
