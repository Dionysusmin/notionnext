import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

/**
 * 文章分享组件
 * @param {*} props 
 * @returns 
 */
export default function ShareBar({ post }) {
  const router = useRouter()
  const [shareUrl, setShareUrl] = useState('')
  const [copied, setCopied] = useState(false)

  // 在客户端获取完整URL
  useEffect(() => {
    setShareUrl(window.location.href)
  }, [router.asPath])

  // 复制链接到剪贴板
  const copyToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    } else {
      // 回退方法
      const textArea = document.createElement('textarea')
      textArea.value = shareUrl
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      document.execCommand('copy')
      textArea.remove()
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="share-bar">
      <div className="share-title">分享到：</div>
      <div className="share-buttons">
        {/* 微信分享 */}
        <button 
          className="share-button wechat" 
          title="分享到微信"
          onClick={() => {
            // 显示二维码或提示用户截图分享
            alert('请截图或复制链接分享到微信')
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
            <path d="M16 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
            <path d="M8 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
            <path d="M16 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
            <path d="M15.5 17H17a5 5 0 0 0 5-5c0-2.76-2.5-5-5.5-5h-9C4.5 7 2 9.24 2 12c0 2.76 2.5 5 5.5 5H9"/>
          </svg>
        </button>
        
        {/* QQ分享 */}
        <a 
          className="share-button qq" 
          title="分享到QQ"
          href={`http://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.summary || '')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"/>
            <path d="M15 8h.01"/>
            <path d="M11 14a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1"/>
          </svg>
        </a>
        
        {/* 微博分享 */}
        <a 
          className="share-button weibo" 
          title="分享到微博"
          href={`http://service.weibo.com/share/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/>
            <path d="M10 9a3 3 0 0 0-3 3v5h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-2Z"/>
            <path d="M17 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
          </svg>
        </a>
        
        {/* 复制链接 */}
        <button 
          className="share-button copy" 
          title="复制链接"
          onClick={copyToClipboard}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
          </svg>
          {copied && <span className="copy-tooltip">已复制</span>}
        </button>
      </div>
    </div>
  )
}