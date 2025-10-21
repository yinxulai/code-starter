import React from 'react'

function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          💖 Main Page
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to your Electron application with React and Tailwind CSS!
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              ⚛️ React
            </h2>
            <p className="text-blue-700">
              Build dynamic user interfaces with React components
            </p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <h2 className="text-xl font-semibold text-indigo-900 mb-2">
              🎨 Tailwind CSS
            </h2>
            <p className="text-indigo-700">
              Style your application with utility-first CSS framework
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
