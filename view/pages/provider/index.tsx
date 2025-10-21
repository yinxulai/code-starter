import React from 'react'

function ProviderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-8">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🌐 Provider Page
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage your providers and integrations
        </p>
        <div className="p-6 bg-green-50 rounded-lg border border-green-200">
          <h2 className="text-2xl font-semibold text-green-900 mb-4">
            Provider Settings
          </h2>
          <p className="text-green-700">
            Configure your provider connections and settings here
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProviderPage
