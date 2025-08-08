import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import SmartLink from '@/components/SmartLink'

/**
 * 分类标签组件
 * 用于在首页显示学科分类
 */
export default function CategoryTags({ categoryOptions }) {
  const router = useRouter()
  const currentCategory = router.query.category || ''

  if (!categoryOptions || categoryOptions.length === 0) {
    return null
  }

  // 获取学科图标
  const getSubjectIcon = (category) => {
    const subject = category.toLowerCase()
    
    if (subject.includes('数学') || subject.includes('math')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )
    } else if (subject.includes('语文') || subject.includes('chinese')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
      )
    } else if (subject.includes('英语') || subject.includes('english')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    } else if (subject.includes('科学') || subject.includes('science')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v8.5a2.5 2.5 0 0 1-5 0V2"></path>
          <path d="M14 2v8.5a2.5 2.5 0 0 0 5 0V2"></path>
          <path d="M8.5 9.5 14 16"></path>
          <path d="M3 21h18"></path>
          <path d="M12 12v9"></path>
        </svg>
      )
    } else if (subject.includes('历史') || subject.includes('history')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    } else if (subject.includes('地理') || subject.includes('geography')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    } else {
      // 默认图标
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    }
  }

  return (
    <section className="category-section">
      <div className="category-tags">
        <SmartLink 
          href="/" 
          className={`category-tag ${!currentCategory ? 'active' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>全部</span>
        </SmartLink>
        
        {categoryOptions.map(category => (
          <SmartLink 
            key={category.name} 
            href={`/category/${category.name}`}
            className={`category-tag ${currentCategory === category.name ? 'active' : ''}`}
          >
            {getSubjectIcon(category.name)}
            <span>{category.name}</span>
          </SmartLink>
        ))}
      </div>
    </section>
  )
}