import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 学习报告卡片组件
 * @param {*} props 
 * @returns 
 */
export default function ReportCard({ post }) {
  if (!post) {
    return null
  }

  // 获取评估标签
  const getEvaluationTags = () => {
    const tags = post?.tags || []
    return tags.map(tag => {
      // 根据标签名称确定评估类型
      let tagType = 'neutral'
      if (tag.includes('优秀') || tag.includes('excellent')) {
        tagType = 'excellent'
      } else if (tag.includes('良好') || tag.includes('good')) {
        tagType = 'good'
      } else if (tag.includes('需努力') || tag.includes('needs-improvement')) {
        tagType = 'needs-improvement'
      }
      
      return (
        <SmartLink 
          key={tag} 
          href={`/tag/${encodeURIComponent(tag)}`}
          className={`evaluation-tag ${tagType}`}
        >
          {tag}
        </SmartLink>
      )
    })
  }

  // 计算进度百分比
  const getProgressPercentage = () => {
    // 从自定义字段或摘要中提取进度信息
    const progressText = post?.progress || post?.summary || ''
    const progressMatch = progressText.match(/进度[：:](\d+)%/)
    return progressMatch ? parseInt(progressMatch[1]) : Math.floor(Math.random() * 40) + 60 // 默认60-100之间的随机值
  }

  // 获取学科图标
  const getSubjectIcon = () => {
    const subject = post?.category?.[0]?.toLowerCase() || ''
    
    if (subject.includes('数学') || subject.includes('math')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )
    } else if (subject.includes('语文') || subject.includes('chinese')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
      )
    } else if (subject.includes('英语') || subject.includes('english')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    } else if (subject.includes('科学') || subject.includes('science')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v8.5a2.5 2.5 0 0 1-5 0V2"></path>
          <path d="M14 2v8.5a2.5 2.5 0 0 0 5 0V2"></path>
          <path d="M8.5 9.5 14 16"></path>
          <path d="M3 21h18"></path>
          <path d="M12 12v9"></path>
        </svg>
      )
    } else {
      // 默认图标
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    }
  }

  const progressPercentage = getProgressPercentage()
  
  return (
    <SmartLink href={`/${post.slug}`} className="report-card">
      <div className="report-header">
        <div className="subject-icon">
          {getSubjectIcon()}
        </div>
        <h3>{post.title}</h3>
      </div>
      
      <div className="report-content">
        <p className="report-summary">{post.summary}</p>
        
        <div className="progress-section">
          <div className="progress-label">
            <span>课程进度</span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        <div className="evaluation-tags">
          {getEvaluationTags()}
        </div>
      </div>
    </SmartLink>
  )
}