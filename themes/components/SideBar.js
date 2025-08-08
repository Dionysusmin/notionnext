import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 侧边栏组件
 * @param {*} props 
 * @returns 
 */
export default function SideBar(props) {
  const { tagOptions, categoryOptions, latestPosts } = props
  const { locale } = useGlobal()

  // 获取学科图标
  const getSubjectIcon = (category) => {
    const subject = category.toLowerCase()
    
    if (subject.includes('数学') || subject.includes('math')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )
    } else if (subject.includes('语文') || subject.includes('chinese')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
      )
    } else if (subject.includes('英语') || subject.includes('english')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    } else {
      // 默认图标
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    }
  }

  return (
    <div className="sidebar">
      {/* 学生信息 */}
      <div className="sidebar-section student-info">
        <div className="student-avatar">
          <img 
            src={siteConfig('AVATAR') || '/images/avatar.jpg'} 
            alt={siteConfig('AUTHOR')} 
            className="avatar-img"
          />
        </div>
        <h3 className="student-name">{siteConfig('AUTHOR')}</h3>
        <p className="student-bio">{siteConfig('BIO')}</p>
      </div>
      
      {/* 分类列表 */}
      {categoryOptions && categoryOptions.length > 0 && (
        <div className="sidebar-section categories">
          <h3 className="sidebar-title">学科分类</h3>
          <ul className="category-list">
            {categoryOptions.map(category => (
              <li key={category.name} className="category-item">
                <SmartLink href={`/category/${category.name}`} className="category-link">
                  <span className="category-icon">
                    {getSubjectIcon(category.name)}
                  </span>
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">{category.count}</span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* 标签列表 */}
      {tagOptions && tagOptions.length > 0 && (
        <div className="sidebar-section tags">
          <h3 className="sidebar-title">评估标签</h3>
          <div className="tag-cloud">
            {tagOptions.map(tag => (
              <SmartLink 
                key={tag.name} 
                href={`/tag/${encodeURIComponent(tag.name)}`}
                className="sidebar-tag"
              >
                {tag.name}
                {tag.count && <span className="tag-count">{tag.count}</span>}
              </SmartLink>
            ))}
          </div>
        </div>
      )}
      
      {/* 最新文章 */}
      {latestPosts && latestPosts.length > 0 && (
        <div className="sidebar-section latest-posts">
          <h3 className="sidebar-title">最新报告</h3>
          <ul className="latest-post-list">
            {latestPosts.map(post => (
              <li key={post.id} className="latest-post-item">
                <SmartLink href={`/${post.slug}`} className="latest-post-link">
                  <span className="post-title">{post.title}</span>
                  <span className="post-date">{post.date?.start_date || post.createdTime}</span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}