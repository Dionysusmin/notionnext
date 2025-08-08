import { useEffect, useState } from 'react'

/**
 * 返回顶部按钮组件
 * @returns 
 */
export default function JumpToTopButton() {
  const [show, setShow] = useState(false)

  // 监听滚动事件，控制按钮显示
  useEffect(() => {
    const scrollListener = () => {
      // 当页面滚动超过300px时显示按钮
      const shouldShow = window.scrollY > 300
      if (shouldShow !== show) {
        setShow(shouldShow)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [show])

  // 点击按钮滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`jump-to-top ${show ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="返回顶部"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
  )
}