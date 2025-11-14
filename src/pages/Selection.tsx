import { Book, Database } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Selection = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-3 py-4 sm:p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto">
        <div className="backdrop-blur-xl bg-white/70 rounded-2xl shadow-soft border border-white/20 p-8 sm:p-12 text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight mb-4">
            HCIP 刷题系统
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-12">
            请选择您要学习的认证方向
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* openEuler Card */}
            <button
              onClick={() => navigate('/openeuler')}
              className="group backdrop-blur-xl bg-white/80 rounded-2xl shadow-lg border-2 border-indigo-200 hover:border-indigo-500 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Book className="text-white" size={40} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">HCIP-openEuler</h2>
                <p className="text-gray-600 mb-4">H12-623-CHS (winback考试) V1.0</p>
                <div className="text-sm text-gray-500">
                  包含判断题、单选题、多选题、填空题
                </div>
                <div className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full font-medium group-hover:bg-indigo-700 transition-colors">
                  开始刷题
                </div>
              </div>
            </button>

            {/* openGauss Card */}
            <button
              onClick={() => navigate('/opengauss')}
              className="group backdrop-blur-xl bg-white/80 rounded-2xl shadow-lg border-2 border-green-200 hover:border-green-500 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="text-white" size={40} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">HCIP-openGauss</h2>
                <p className="text-gray-600 mb-4">winback 人才加速计划</p>
                <div className="text-sm text-gray-500">
                  包含单选题、多选题、判断题
                </div>
                <div className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full font-medium group-hover:bg-green-700 transition-colors">
                  开始刷题
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>提示：选择对应的认证方向开始您的学习之旅</p>
        </div>
      </div>
    </div>
  )
}

export default Selection
