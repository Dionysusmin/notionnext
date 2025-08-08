import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import SmartLink from '@/components/SmartLink'
import { useParentReportGlobal } from '../index'
import CONFIG from '../config'

/**
 * 导航栏组件
 * @param {*} props 
 * @returns 
 */
export default function NavBar(props) {
  const router = useRouter()
  const { searchModal } = useParentReportGlobal()
  const currentPath = router.asPath

  // 判断当前路径是否激活
  const isActive = path => {
    if (path === '/' && currentPath === '/') return true
    if (path !== '/' && currentPath.startsWith(path)) return true
    return false
  }

  // 菜单项配置
  const links = [
    { path: '/', icon: 'home', text: '首页' },
    { path: '/category', icon: 'folder', text: '分类' },
    { path: '/tag', icon: 'tag', text: '标签' },
    { path: '/archive', icon: 'archive', text: '归档' }
  ]

  // 获取图标
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'home':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        )
      case 'folder':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
          </svg>
        )
      case 'tag':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
            <path d="M7 7h.01"></path>
          </svg>
        )
      case 'archive':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="5" x="2" y="3" rx="1"></rect>
            <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
            <path d="M10 12h4"></path>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          {links.map(link => (
            <SmartLink 
              key={link.path} 
              href={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {getIcon(link.icon)}
              <span>{link.text}</span>
            </SmartLink>
          ))}
        </div>
      </div>
    </nav>
  )
}