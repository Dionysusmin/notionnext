import { useRouter } from 'next/router'
import SmartLink from '@/components/SmartLink'
import ReportCard from './ReportCard'

/**
 * 博客列表分页组件
 * @param {*} props 
 * @returns 
 */
export default function BlogListPage({ posts, page, totalPages }) {
  const router = useRouter()
  const currentPath = router.asPath.split('?')[0]

  // 生成分页链接
  const generatePageLinks = () => {
    const pageLinks = []
    const MAX_DISPLAY = 5 // 最多显示的页码数
    
    // 计算显示的页码范围
    let startPage = Math.max(1, page - Math.floor(MAX_DISPLAY / 2))
    let endPage = Math.min(totalPages, startPage + MAX_DISPLAY - 1)
    
    // 调整起始页码，确保显示足够的页码
    if (endPage - startPage + 1 < MAX_DISPLAY && startPage > 1) {
      startPage = Math.max(1, endPage - MAX_DISPLAY + 1)
    }
    
    // 添加首页链接
    if (startPage > 1) {
      pageLinks.push(
        <SmartLink 
          key="first" 
          href={`${currentPath}?page=1`}
          className="pagination-link"
        >
          1
        </SmartLink>
      )
      
      // 添加省略号
      if (startPage > 2) {
        pageLinks.push(
          <span key="ellipsis1" className="pagination-ellipsis">...</span>
        )
      }
    }
    
    // 添加中间页码链接
    for (let i = startPage; i <= endPage; i++) {
      pageLinks.push(
        <SmartLink 
          key={i} 
          href={`${currentPath}?page=${i}`}
          className={`pagination-link ${i === page ? 'active' : ''}`}
        >
          {i}
        </SmartLink>
      )
    }
    
    // 添加末页链接
    if (endPage < totalPages) {
      // 添加省略号
      if (endPage < totalPages - 1) {
        pageLinks.push(
          <span key="ellipsis2" className="pagination-ellipsis">...</span>
        )
      }
      
      pageLinks.push(
        <SmartLink 
          key="last" 
          href={`${currentPath}?page=${totalPages}`}
          className="pagination-link"
        >
          {totalPages}
        </SmartLink>
      )
    }
    
    return pageLinks
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="no-results">
        <p>暂无学习报告</p>
      </div>
    )
  }

  return (
    <div className="blog-list-page">
      <div id="posts-wrapper" className="reports-grid">
        {posts.map(post => (
          <ReportCard key={post.id} post={post} />
        ))}
      </div>
      
      {/* 分页导航 */}
      {totalPages > 1 && (
        <div className="pagination">
          {/* 上一页按钮 */}
          {page > 1 && (
            <SmartLink 
              href={`${currentPath}?page=${page - 1}`}
              className="pagination-link prev"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span>上一页</span>
            </SmartLink>
          )}
          
          {/* 页码链接 */}
          <div className="pagination-numbers">
            {generatePageLinks()}
          </div>
          
          {/* 下一页按钮 */}
          {page < totalPages && (
            <SmartLink 
              href={`${currentPath}?page=${page + 1}`}
              className="pagination-link next"
            >
              <span>下一页</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </SmartLink>
          )}
        </div>
      )}
    </div>
  )
}