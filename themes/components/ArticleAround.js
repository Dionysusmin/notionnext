import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 上一篇/下一篇文章导航组件
 * @param {*} props 
 * @returns 
 */
export default function ArticleAround({ prev, next }) {
  if (!prev && !next) {
    return null
  }

  return (
    <div className="article-around">
      <div className="around-container">
        {/* 上一篇文章 */}
        <div className="around-item prev">
          {prev ? (
            <SmartLink href={`/${prev.slug}`} className="around-link">
              <div className="around-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </div>
              <div className="around-content">
                <span className="around-label">上一篇</span>
                <span className="around-title">{prev.title}</span>
              </div>
            </SmartLink>
          ) : (
            <div className="around-empty">
              <div className="around-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </div>
              <div className="around-content">
                <span className="around-label">上一篇</span>
                <span className="around-title">没有更多了</span>
              </div>
            </div>
          )}
        </div>
        
        {/* 下一篇文章 */}
        <div className="around-item next">
          {next ? (
            <SmartLink href={`/${next.slug}`} className="around-link">
              <div className="around-content">
                <span className="around-label">下一篇</span>
                <span className="around-title">{next.title}</span>
              </div>
              <div className="around-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </SmartLink>
          ) : (
            <div className="around-empty">
              <div className="around-content">
                <span className="around-label">下一篇</span>
                <span className="around-title">没有更多了</span>
              </div>
              <div className="around-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}