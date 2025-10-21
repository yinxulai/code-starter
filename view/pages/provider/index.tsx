import React, { useState } from 'react'

type Provider = {
  id: string
  name: string
  icon: string
  status: 'active' | 'inactive' | 'error'
  description: string
  apiKey?: string
}

function ProviderPage() {
  const [providers, setProviders] = useState<Provider[]>([
    {
      id: 'claude',
      name: 'Claude Code',
      icon: '🤖',
      status: 'active',
      description: 'Anthropic Claude AI 代码助手',
      apiKey: 'sk-ant-*********************'
    },
    {
      id: 'codex',
      name: 'OpenAI Codex',
      icon: '🧠',
      status: 'inactive',
      description: 'OpenAI Codex 代码生成模型',
    },
    {
      id: 'copilot',
      name: 'GitHub Copilot',
      icon: '🐙',
      status: 'inactive',
      description: 'GitHub 代码建议工具',
    },
  ])

  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(providers[0])
  const [isEditing, setIsEditing] = useState(false)

  const handleSetActive = (providerId: string) => {
    setProviders(providers.map(p => ({
      ...p,
      status: p.id === providerId ? 'active' : 'inactive'
    })))
  }

  return (
    <div className="h-full flex gap-4">
      {/* 供应商列表 */}
      <div className="w-56 shrink-0">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">供应商列表</h3>
          <div className="space-y-1">
            {providers.map((provider) => (
              <button
                key={provider.id}
                onClick={() => setSelectedProvider(provider)}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-all ${
                  selectedProvider?.id === provider.id
                    ? 'bg-blue-50 border border-blue-200'
                    : 'hover:bg-gray-50 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{provider.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{provider.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        provider.status === 'active' ? 'bg-green-500' :
                        provider.status === 'error' ? 'bg-red-500' :
                        'bg-gray-300'
                      }`}></div>
                      <span className="text-xs text-gray-500">
                        {provider.status === 'active' ? '使用中' : '未启用'}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 供应商详情 */}
      <div className="flex-1 min-w-0">
        {selectedProvider ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 h-full flex flex-col">
            {/* 头部 */}
            <div className="flex items-start justify-between mb-5 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                  {selectedProvider.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{selectedProvider.name}</h2>
                  <p className="text-xs text-gray-500 mt-0.5">{selectedProvider.description}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {selectedProvider.status !== 'active' && (
                  <button
                    onClick={() => handleSetActive(selectedProvider.id)}
                    className="px-3 py-1.5 bg-linear-to-r from-[#1B33EA] to-[#4A5FFF] text-white text-xs font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    设为当前
                  </button>
                )}
              </div>
            </div>

            {/* 配置表单 */}
            <div className="flex-1 overflow-auto">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">API Key</label>
                  <div className="relative">
                    <input
                      type={isEditing ? 'text' : 'password'}
                      value={selectedProvider.apiKey || ''}
                      placeholder="请输入 API Key"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={!isEditing}
                    />
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700"
                    >
                      {isEditing ? '完成' : '编辑'}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Base URL</label>
                  <input
                    type="text"
                    placeholder="https://api.anthropic.com"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">模型版本</label>
                  <select
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={!isEditing}
                  >
                    <option>claude-3-opus</option>
                    <option>claude-3-sonnet</option>
                    <option>claude-3-haiku</option>
                  </select>
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      disabled={!isEditing}
                    />
                    <span className="text-sm text-gray-700">启用流式输出</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      disabled={!isEditing}
                      defaultChecked
                    />
                    <span className="text-sm text-gray-700">自动重试失败请求</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 底部操作按钮 */}
            {isEditing && (
              <div className="flex gap-2 pt-4 border-t border-gray-100 mt-4">
                <button className="flex-1 px-4 py-2 bg-linear-to-r from-[#1B33EA] to-[#4A5FFF] text-white text-sm font-medium rounded-lg shadow-md shadow-blue-500/25 hover:shadow-lg transition-all">
                  保存配置
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-all"
                >
                  取消
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full flex items-center justify-center">
            <p className="text-gray-400">请选择一个供应商</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProviderPage
