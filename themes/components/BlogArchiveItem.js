import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 博客归档项组件
 * @param {*} props 
 * @returns 
 */
export default function BlogArchiveItem({ archiveTitle, archivePosts }) {
  if (!archivePosts || !archiveTitle) {
    return null
  }

  // 获取学科图标
  const getSubjectIcon = (category) => {
    if (!category) return null
    
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
    <div className="archive-item">
      <h2 className="archive-title">{archiveTitle}</h2>
      <ul className="archive-post-list">
        {archivePosts[archiveTitle].map(post => (
          <li key={post.id} className="archive-post">
            <div className="post-date">
              {post.date?.start_date || post.createdTime}
            </div>
            <SmartLink href={`/${post.slug}`} className="post-title">
              {post.category && post.category[0] && (
                <span className="post-category">
                  {getSubjectIcon(post.category[0])}
                  <span>{post.category[0]}</span>
                </span>
              )}
              <span>{post.title}</span>
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  )
}