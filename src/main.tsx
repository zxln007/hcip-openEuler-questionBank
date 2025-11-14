import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Star } from 'lucide-react'
import './index.css'
import App from './App.tsx'
import RandomExam from './pages/RandomExam'
import Practice from './pages/Practice'

const Stars = () => {
  const [count, setCount] = useState<number | null>(null)
  useEffect(() => {
    fetch('https://api.github.com/repos/MRZHUH/hcip-openEuler-questionBank')
      .then((r) => r.json())
      .then((d) => setCount(typeof d.stargazers_count === 'number' ? d.stargazers_count : 0))
      .catch(() => {})
  }, [])
  return (
    <a
      href="https://github.com/MRZHUH/hcip-openEuler-questionBank"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 px-2 py-1 rounded-md bg-white text-gray-800 border border-indigo-300 hover:bg-indigo-50 text-sm"
    >
      <Star size={16} className="text-yellow-500" />
      <span>Star</span>
      <span className="ml-1 inline-flex items-center justify-center min-w-[1.5rem] px-1 rounded bg-gray-100 text-gray-700">
        {count === null ? '—' : String(count)}
      </span>
    </a>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <div className="w-full bg-white/70 backdrop-blur border-b border-white/30">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'px-3 py-1 rounded-md bg-indigo-600 text-white shadow-sm text-sm sm:text-base'
                : 'px-3 py-1 rounded-md bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-50 text-sm sm:text-base'
            }
          >
            主页
          </NavLink>
          <NavLink
            to="/random"
            className={({ isActive }) =>
              isActive
                ? 'px-3 py-1 rounded-md bg-indigo-600 text-white shadow-sm text-sm sm:text-base'
                : 'px-3 py-1 rounded-md bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-50 text-sm sm:text-base'
            }
          >
            随机出题
          </NavLink>
          <NavLink
            to="/practice"
            className={({ isActive }) =>
              isActive
                ? 'px-3 py-1 rounded-md bg-indigo-600 text-white shadow-sm text-sm sm:text-base'
                : 'px-3 py-1 rounded-md bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-50 text-sm sm:text-base'
            }
          >
            背题
          </NavLink>
          <div className="ml-auto">
            <Stars />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/random" element={<RandomExam />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </HashRouter>
    <SpeedInsights />
  </StrictMode>,
)
