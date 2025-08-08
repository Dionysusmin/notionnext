import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

/**
 * 搜索输入框
 * @param {*} props 
 * @returns 
 */
export default function SearchInput(props) {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [showClear, setShowClear] = useState(false)

  // 从URL中获取搜索关键词
  useEffect(() => {
    if (router.query?.s) {
      setSearchValue(router.query.s)
      setShowClear(true)
    }
  }, [router.query])

  // 处理搜索
  const handleSearch = (e) => {
    e.preventDefault()
    const queryStr = searchValue.trim()
    if (!queryStr) return
    
    router.push({ pathname: '/search', query: { s: queryStr } })
  }

  // 处理输入变化
  const handleChange = (e) => {
    const val = e.target.value
    setSearchValue(val)
    setShowClear(val.length > 0)
  }

  // 清除搜索
  const clearSearch = () => {
    setSearchValue('')
    setShowClear(false)
    if (router.pathname === '/search') {
      router.push('/')
    }
  }

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          value={searchValue}
          onChange={handleChange}
          placeholder="搜索学习报告..."
          aria-label="搜索"
        />
        
        {showClear && (
          <button 
            type="button" 
            className="search-clear-btn"
            onClick={clearSearch}
            aria-label="清除搜索"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        )}
        
        <button 
          type="submit" 
          className="search-submit-btn"
          aria-label="搜索"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
      </form>
    </div>
  )
}