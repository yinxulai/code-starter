import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/mcp', label: 'MCP Server', icon: '🔌' },
    { path: '/provider', label: 'Providers', icon: '🌐' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="flex h-screen bg-transparent p-2 drag-region">
      <div className="flex h-full w-full rounded-xl overflow-hidden shadow-2xl bg-[#F3F5F7]">
      {/* Compact Sidebar */}
      <aside className="w-56 bg-white shadow-sm flex flex-col">
        {/* Logo Section - Compact */}
        <div className="px-4 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#1B33EA] to-[#4A5FFF] flex items-center justify-center shadow-md shadow-blue-500/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900">Code Starter</h1>
            </div>
          </div>
        </div>

        {/* Navigation - Compact */}
        <nav className="drag-region flex-1 px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`no-drag-region flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-linear-to-r from-[#1B33EA] to-[#4A5FFF] text-white shadow-md shadow-blue-500/25 font-medium'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#1B33EA]'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                  {isActive(item.path) && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Info - Minimal */}
        <div className="drag-region px-3 py-3 border-t border-gray-100">
          <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-gray-50">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-700 truncate">v1.0.0</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto flex flex-col">
        {/* Compact Top Bar */}
        <div className="bg-white border-b border-gray-100 px-5 py-3 shadow-sm shrink-0">
          <div className="select-none flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                {navItems.find(item => isActive(item.path))?.label || 'Dashboard'}
              </h2>
            </div>
          </div>
        </div>

        {/* Page Content - Compact Padding */}
        <div className="no-drag-region flex-1 overflow-auto p-5">
          <Outlet />
        </div>
      </main>
      </div>
    </div>
  )
}

export default Layout
