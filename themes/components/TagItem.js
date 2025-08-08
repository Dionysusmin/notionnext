import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 标签组件
 * @param {*} props 
 * @returns 
 */
export default function TagItem({ tag, className = '' }) {
  if (!tag) return null

  // 根据标签内容确定类型
  const getTagType = (tagName) => {
    const name = tagName.toLowerCase()
    
    // 优秀类标签
    if (
      name.includes('优秀') || 
      name.includes('excellent') || 
      name.includes('outstanding') ||
      name.includes('很好') ||
      name.includes('进步') ||
      name.includes('提高')
    ) {
      return 'excellent'
    }
    
    // 良好类标签
    if (
      name.includes('良好') || 
      name.includes('good') || 
      name.includes('不错')
    ) {
      return 'good'
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
      return 'needs-improvement'
    }
    
    // 默认为中性标签
    return 'neutral'
  }

  const tagType = getTagType(tag.name)
  const tagClass = `tag-item ${tagType} ${className}`

  return (
    <SmartLink href={`/tag/${tag.name}`} className={tagClass}>
      <span className="tag-name">{tag.name}</span>
      {tag.count && <span className="tag-count">{tag.count}</span>}
    </SmartLink>
  )
}