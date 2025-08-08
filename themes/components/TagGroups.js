import { siteConfig } from '@/lib/config'
import TagItem from './TagItem'

/**
 * 标签分组组件
 * @param {*} props 
 * @returns 
 */
export default function TagGroups({ tags }) {
  if (!tags || tags.length === 0) {
    return null
  }

  // 根据标签类型分组
  const groupTags = (tags) => {
    const groups = {
      excellent: [],
      good: [],
      needsImprovement: [],
      neutral: []
    }

    tags.forEach(tag => {
      const name = tag.name.toLowerCase()
      
      // 优秀类标签
      if (
        name.includes('优秀') || 
        name.includes('excellent') || 
        name.includes('outstanding') ||
        name.includes('很好') ||
        name.includes('进步') ||
        name.includes('提高')
      ) {
        groups.excellent.push(tag)
        return
      }
      
      // 良好类标签
      if (
        name.includes('良好') || 
        name.includes('good') || 
        name.includes('不错')
      ) {
        groups.good.push(tag)
        return
      }
      
      // 需要改进类标签
      if (
        name.includes('改进') || 
        name.includes('提升') || 
        name.includes('加强') || 
        name.includes('improve') ||
        name.includes('attention') ||
        name.includes('注意')
      ) {
        groups.needsImprovement.push(tag)
        return
      }
      
      // 默认为中性标签
      groups.neutral.push(tag)
    })

    return groups
  }

  const tagGroups = groupTags(tags)

  return (
    <div className="tag-groups">
      <h3 className="tag-groups-title">评价标签</h3>
      
      {/* 优秀标签组 */}
      {tagGroups.excellent.length > 0 && (
        <div className="tag-group excellent">
          <div className="tag-group-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span>优秀表现</span>
          </div>
          <div className="tag-group-items">
            {tagGroups.excellent.map(tag => (
              <TagItem key={tag.name} tag={tag} />
            ))}
          </div>
        </div>
      )}
      
      {/* 良好标签组 */}
      {tagGroups.good.length > 0 && (
        <div className="tag-group good">
          <div className="tag-group-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            <span>良好表现</span>
          </div>
          <div className="tag-group-items">
            {tagGroups.good.map(tag => (
              <TagItem key={tag.name} tag={tag} />
            ))}
          </div>
        </div>
      )}
      
      {/* 需要改进标签组 */}
      {tagGroups.needsImprovement.length > 0 && (
        <div className="tag-group needs-improvement">
          <div className="tag-group-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>需要改进</span>
          </div>
          <div className="tag-group-items">
            {tagGroups.needsImprovement.map(tag => (
              <TagItem key={tag.name} tag={tag} />
            ))}
          </div>
        </div>
      )}
      
      {/* 其他标签组 */}
      {tagGroups.neutral.length > 0 && (
        <div className="tag-group neutral">
          <div className="tag-group-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>其他标签</span>
          </div>
          <div className="tag-group-items">
            {tagGroups.neutral.map(tag => (
              <TagItem key={tag.name} tag={tag} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}