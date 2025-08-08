import Link from 'next/link'

/**
 * 智能链接组件，自动判断内部链接和外部链接
 * @param {*} props 
 * @returns 
 */
export default function SmartLink({ href, children, className = '', ...rest }) {
  // 检查是否为外部链接
  const isExternalLink = href && (
    href.startsWith('http://') || 
    href.startsWith('https://') || 
    href.startsWith('mailto:') || 
    href.startsWith('tel:')
  )

  // 外部链接使用a标签，内部链接使用Next.js的Link组件
  if (isExternalLink) {
    return (
      <a 
        href={href} 
        className={className} 
        target="_blank" 
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link href={href || '#'} className={className} {...rest}>
        {children}
      </Link>
    )
  }
}