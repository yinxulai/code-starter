import React from 'react'

function MCPPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🔌 MCP Page
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Model Context Protocol management page
        </p>
        <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">
            MCP Configuration
          </h2>
          <p className="text-purple-700">
            Configure your Model Context Protocol settings here
          </p>
        </div>
      </div>
    </div>
  )
}

export default MCPPage
