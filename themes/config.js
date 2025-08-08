/**
 * 家长学习汇报主题的配置文件
 */

const CONFIG = {
  // 菜单配置
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索
  
  // 首页封面配置
  POST_LIST_COVER: true, // 列表显示封面图
  POST_LIST_SUMMARY: true, // 列表显示摘要
  POST_LIST_PREVIEW: true, // 列表显示预览图
  
  // 文章页配置
  POST_HEADER_IMAGE: true, // 文章页显示标题图
  POST_TITLE_ANCHOR: true, // 文章页标题锚点
  
  // 移动端配置
  MOBILE_BOTTOM_NAV: true, // 移动端底部导航
  MOBILE_THEME_SWITCH: true, // 移动端主题切换
  
  // 主题颜色配置
  THEME_COLORS: {
    light: {
      bgColor: '#fff',
      textColor: '#333',
      primaryColor: '#4f46e5',
      secondaryColor: '#f3f4f6',
      borderColor: '#e5e7eb',
      headerBg: '#fff',
      cardBg: '#fff',
      cardBorder: '#e5e7eb',
      navText: '#4b5563',
      navHover: '#4f46e5',
      footerBg: '#f9fafb',
      progressBg: '#e5e7eb',
      progressFill: '#4f46e5',
      goodColor: '#10b981',
      mediumColor: '#f59e0b',
      poorColor: '#ef4444'
    },
    dark: {
      bgColor: '#111827',
      textColor: '#e5e7eb',
      primaryColor: '#6366f1',
      secondaryColor: '#1f2937',
      borderColor: '#374151',
      headerBg: '#1f2937',
      cardBg: '#1f2937',
      cardBorder: '#374151',
      navText: '#9ca3af',
      navHover: '#818cf8',
      footerBg: '#111827',
      progressBg: '#374151',
      progressFill: '#6366f1',
      goodColor: '#34d399',
      mediumColor: '#fbbf24',
      poorColor: '#f87171'
    }
  },
  
  // 通知配置
  NOTICE_SHOW: false, // 显示公告
  NOTICE_TEXT: '', // 公告内容
  NOTICE_BAR: false, // 显示公告栏
  
  // 评价标签配置
  EVALUATION_TAGS: {
    good: ['积极参与', '认真完成作业', '古诗背诵优秀', '阅读理解能力强', '单词记忆良好', '实验操作认真', '观察记录详细', '积极提问思考'],
    medium: ['需加强应用题理解', '可加强课堂发言', '需加强口语练习', '听力理解需提高'],
    poor: ['作业完成不及时', '课堂注意力不集中', '知识掌握不牢固']
  }
}

export default CONFIG