import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import SmartLink from '@/components/SmartLink'

/**
 * 底部导航栏组件
 * 仅在移动端显示
 */
export default function BottomNav(props) {
  const router = useRouter()
  const currentPath = router.asPath

  // 判断当前路径是否激活
  const isActive = path => {
    if (path === '/' && currentPath === '/') return true
    if (path !== '/' && currentPath.startsWith(path)) return true
    return false
  }

  return (
    <div className='bottom-nav md:hidden'>
      <SmartLink href='/' className={`nav-item ${isActive('/') ? 'active' : ''}`}>
        <svg className='nav-icon' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
          <polyline points='9 22 9 12 15 12 15 22'></polyline>
        </svg>
        <span>首页</span>
      </SmartLink>
      
      <SmartLink href='/category' className={`nav-item ${isActive('/category') ? 'active' : ''}`}>
        <svg className='nav-icon' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <rect width='18' height='18' x='3' y='4' rx='2' ry='2'></rect>
          <line x1='16' x2='16' y1='2' y2='6'></line>
          <line x1='8' x2='8' y1='2' y2='6'></line>
          <line x1='3' x2='21' y1='10' y2='10'></line>
        </svg>
        <span>课程</span>
      </SmartLink>
      
      <SmartLink href='/tag' className={`nav-item ${isActive('/tag') ? 'active' : ''}`}>
        <svg className='nav-icon' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path>
          <path d='M13.73 21a2 2 0 0 1-3.46 0'></path>
        </svg>
        <span>标签</span>
      </SmartLink>
      
      <SmartLink href='/archive' className={`nav-item ${isActive('/archive') ? 'active' : ''}`}>
        <svg className='nav-icon' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
          <circle cx='12' cy='7' r='4'></circle>
        </svg>
        <span>归档</span>
      </SmartLink>
    </div>
  )
}