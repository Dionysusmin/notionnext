import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import { useState } from 'react'

/**
 * 文章密码锁定组件
 * @param {*} props 
 * @returns 
 */
export default function ArticleLock({ validPassword }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  // 处理密码提交
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!password) {
      setError('请输入密码')
      return
    }

    // 验证密码
    validPassword(password).then(isValid => {
      if (isValid) {
        // 密码正确，刷新页面
        router.reload()
      } else {
        // 密码错误
        setError('密码错误，请重试')
      }
    })
  }

  return (
    <div className="article-lock">
      <div className="lock-container">
        <div className="lock-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        
        <h2 className="lock-title">内容已加密</h2>
        <p className="lock-description">此内容已被加密保护，请输入密码访问</p>
        
        <form className="lock-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="password" 
              className="password-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
              aria-label="密码"
            />
            {error && <div className="error-message">{error}</div>}
          </div>
          
          <button type="submit" className="submit-button">
            <span>解锁</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" x2="6" y1="1" y2="4"></line>
              <line x1="10" x2="10" y1="1" y2="4"></line>
              <line x1="14" x2="14" y1="1" y2="4"></line>
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}