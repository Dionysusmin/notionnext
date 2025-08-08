import { useGlobal } from '@/lib/global'
import { useEffect, useRef, useState } from 'react'
import CONFIG from '../config'
import ReportCard from './ReportCard'

/**
 * 博客列表滚动加载组件
 * @param {*} props 
 * @returns 
 */
export default function BlogListScroll({ posts }) {
  const { locale } = useGlobal()
  // 上一页按钮的引用
  const postsRef = useRef(null)
  // 观察者
  const observer = useRef(null)
  // 分页
  const [page, updatePage] = useState(1)
  // 每页文章数量
  const postsPerPage = CONFIG.POST_LIST_SIZE || 10
  // 是否已经加载完所有文章
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  // 已加载的文章
  const [renderedPosts, updateRenderedPosts] = useState([]) 

  // 监听滚动事件
  useEffect(() => {
    const handleScrollToBottom = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight

      if (scrolledToBottom && !isLoadingMore) {
        setIsLoadingMore(true)
        updatePage(page + 1)
      }
    }

    window.addEventListener('scroll', handleScrollToBottom)
    return () => {
      window.removeEventListener('scroll', handleScrollToBottom)
    }
  }, [isLoadingMore])

  // 加载更多文章
  useEffect(() => {
    if (!posts) return
    let newRenderedPosts = [...renderedPosts]
    const currentPagePosts = posts.slice((page - 1) * postsPerPage, page * postsPerPage)
    newRenderedPosts = newRenderedPosts.concat(currentPagePosts)
    updateRenderedPosts(newRenderedPosts)
    setIsLoadingMore(false)
  }, [page, posts])

  // 初始化文章列表
  useEffect(() => {
    if (!posts) return
    updateRenderedPosts(posts.slice(0, postsPerPage))
    updatePage(1)
  }, [posts])

  if (!posts || posts.length === 0) {
    return (
      <div className="no-results">
        <p>暂无学习报告</p>
      </div>
    )
  }

  return (
    <div id="posts-wrapper" ref={postsRef} className="reports-grid">
      {renderedPosts.map(post => (
        <ReportCard key={post.id} post={post} />
      ))}
      
      {/* 加载更多提示 */}
      {isLoadingMore && (
        <div className="loading-more">
          <div className="loading-spinner"></div>
          <span>加载更多...</span>
        </div>
      )}
      
      {/* 全部加载完毕提示 */}
      {renderedPosts.length >= posts.length && renderedPosts.length > 0 && (
        <div className="all-loaded">
          <span>已加载全部内容</span>
        </div>
      )}
    </div>
  )
}