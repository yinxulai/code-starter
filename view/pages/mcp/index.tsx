import React, { useState } from 'react'

type MCPServer = {
  id: string
  name: string
  status: 'connected' | 'disconnected' | 'error'
  url: string
  description: string
  lastSync?: string
}

function MCPPage() {
  const [servers, setServers] = useState<MCPServer[]>([
    {
      id: '1',
      name: 'Local MCP Server',
      status: 'connected',
      url: 'http://localhost:3000',
      description: '本地开发服务器',
      lastSync: '2 分钟前'
    },
    {
      id: '2',
      name: 'Production MCP',
      status: 'disconnected',
      url: 'https://mcp.example.com',
      description: '生产环境服务器',
      lastSync: '1 小时前'
    },
  ])

  const [showAddModal, setShowAddModal] = useState(false)

  const handleConnect = (serverId: string) => {
    setServers(servers.map(s => 
      s.id === serverId ? { ...s, status: 'connected' as const } : s
    ))
  }

  const handleDisconnect = (serverId: string) => {
    setServers(servers.map(s => 
      s.id === serverId ? { ...s, status: 'disconnected' as const } : s
    ))
  }

  return (
    <div className="h-full flex flex-col gap-4">
      {/* 顶部操作栏 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-200">
            <span className="text-xs font-medium text-blue-700">
              {servers.filter(s => s.status === 'connected').length} / {servers.length} 已连接
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-3 py-1.5 bg-linear-to-r from-[#1B33EA] to-[#4A5FFF] text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          添加服务器
        </button>
      </div>

      {/* MCP 服务器列表 */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-3">
          {servers.map((server) => (
            <div
              key={server.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                    server.status === 'connected' ? 'bg-green-50' :
                    server.status === 'error' ? 'bg-red-50' :
                    'bg-gray-50'
                  }`}>
                    🔌
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-gray-900">{server.name}</h3>
                      <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        server.status === 'connected' ? 'bg-green-100 text-green-700' :
                        server.status === 'error' ? 'bg-red-100 text-red-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {server.status === 'connected' ? '已连接' : 
                         server.status === 'error' ? '错误' : '未连接'}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{server.description}</p>
                    <p className="text-xs text-gray-400 font-mono">{server.url}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  {server.status === 'connected' ? (
                    <button
                      onClick={() => handleDisconnect(server.id)}
                      className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
                    >
                      断开
                    </button>
                  ) : (
                    <button
                      onClick={() => handleConnect(server.id)}
                      className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all"
                    >
                      连接
                    </button>
                  )}
                  <button className="px-2 py-1.5 text-gray-400 hover:text-gray-600 transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 统计信息 */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500">延迟</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {server.status === 'connected' ? '45ms' : '--'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">请求数</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {server.status === 'connected' ? '1,234' : '--'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">最后同步</p>
                  <p className="text-sm font-semibold text-gray-900">{server.lastSync || '--'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部配置区域 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">全局配置</h3>
        <div className="space-y-2">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-gray-700">自动重连</span>
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-gray-700">连接超时检测</span>
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
          </label>
          <div className="pt-2 border-t border-gray-100">
            <label className="block text-xs text-gray-600 mb-1">超时时间 (秒)</label>
            <input
              type="number"
              defaultValue={30}
              className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* 添加服务器模态框 (简化版提示) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowAddModal(false)}>
          <div className="bg-white rounded-xl p-5 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-gray-900 mb-4">添加 MCP 服务器</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">服务器名称</label>
                <input type="text" placeholder="My MCP Server" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">服务器地址</label>
                <input type="text" placeholder="http://localhost:3000" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">描述</label>
                <input type="text" placeholder="可选" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 px-4 py-2 bg-linear-to-r from-[#1B33EA] to-[#4A5FFF] text-white text-sm font-medium rounded-lg">添加</button>
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">取消</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MCPPage
