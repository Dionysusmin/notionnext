import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import SmartLink from '@/components/SmartLink'
import { useParentReportGlobal } from '../index'
import CONFIG from '../config'

/**
 * 顶部导航栏 Header
 * @param {*} props 
 * @returns 
 */
export default function Header(props) {
  const { post } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const { searchModal } = useParentReportGlobal()

  // 切换搜索框显示
  const toggleSearch = () => {
    searchModal?.current?.openSearch()
  }

  // 切换暗黑模式
  const toggleDarkMode = () => {
    const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="header">
      <div className="header-container">
        <SmartLink href="/" className="logo">
          {siteConfig('TITLE')}
        </SmartLink>
        
        <div className="header-actions">
          {/* 搜索按钮 */}
          <div className="header-action-btn" onClick={toggleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          
          {/* 暗黑模式切换按钮 */}
          {siteConfig('THEME_SWITCH', null, CONFIG) && (
            <div className="header-action-btn" onClick={toggleDarkMode}>
              {/* 暗黑模式图标 - 在亮色模式下显示 */}
              <svg className="dark-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              
              {/* 亮色模式图标 - 在暗黑模式下显示 */}
              <svg className="light-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}