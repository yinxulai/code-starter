import React, { useState } from 'react'

function MainPage() {
  const [isRunning, setIsRunning] = useState(false)
  const [status, setStatus] = useState<'idle' | 'starting' | 'running' | 'stopping'>('idle')

  const handleStart = async () => {
    setStatus('starting')
    // TODO: 调用启动 API
    setTimeout(() => {
      setIsRunning(true)
      setStatus('running')
    }, 1000)
  }

  const handleStop = async () => {
    setStatus('stopping')
    // TODO: 调用停止 API
    setTimeout(() => {
      setIsRunning(false)
      setStatus('idle')
    }, 1000)
  }

  return (
    <div className="h-full flex flex-col gap-4">
      {/* 状态卡片 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${
              status === 'running' ? 'bg-green-500 animate-pulse' :
              status === 'starting' || status === 'stopping' ? 'bg-yellow-500 animate-pulse' :
              'bg-gray-300'
            }`}></div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">服务状态</h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {
                  status === 'idle' ? '未运行' :
                  status === 'starting' ? '启动中...' :
                  status === 'running' ? '运行中' :
                  '停止中...'
                }
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">运行时间</p>
            <p className="text-sm font-medium text-gray-700">{isRunning ? '00:05:23' : '--:--:--'}</p>
          </div>
        </div>

        {/* 控制按钮 */}
        <div className="flex gap-2">
          {!isRunning ? (
            <button
              onClick={handleStart}
              disabled={status === 'starting'}
              className="flex-1 bg-linear-to-r from-[#1B33EA] to-[#4A5FFF] text-white px-4 py-2.5 rounded-lg font-medium text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              {status === 'starting' ? '启动中...' : '启动服务'}
            </button>
          ) : (
            <button
              onClick={handleStop}
              disabled={status === 'stopping'}
              className="flex-1 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h12v12H6z"/>
              </svg>
              {status === 'stopping' ? '停止中...' : '停止服务'}
            </button>
          )}
        </div>
      </div>

      {/* 快速信息 */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <span className="text-lg">🚀</span>
            </div>
            <h4 className="text-xs font-medium text-gray-600">当前供应商</h4>
          </div>
          <p className="text-sm font-semibold text-gray-900">Claude Code</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
              <span className="text-lg">🔌</span>
            </div>
            <h4 className="text-xs font-medium text-gray-600">MCP 状态</h4>
          </div>
          <p className="text-sm font-semibold text-gray-900">{isRunning ? '已连接' : '未连接'}</p>
        </div>
      </div>

      {/* 日志预览 */}
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col min-h-0">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900">运行日志</h3>
          <button className="text-xs text-gray-500 hover:text-gray-700">
            清空
          </button>
        </div>
        <div className="flex-1 bg-gray-50 rounded-lg p-3 font-mono text-xs text-gray-600 overflow-auto min-h-0">
          {isRunning ? (
            <div className="space-y-1">
              <div>[2025-10-22 10:30:45] 服务启动成功</div>
              <div>[2025-10-22 10:30:46] API 服务器监听端口: 3000</div>
              <div>[2025-10-22 10:30:47] MCP 连接已建立</div>
              <div className="text-green-600">[2025-10-22 10:30:48] 系统运行正常</div>
            </div>
          ) : (
            <div className="text-gray-400 text-center py-8">暂无日志信息</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainPage
