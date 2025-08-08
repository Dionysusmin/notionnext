import { createGlobalStyle } from 'styled-components'
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

/**
 * 全局样式
 */
export const Style = createGlobalStyle`
  :root {
    --bg-color: ${CONFIG.THEME_COLORS.light.bgColor};
    --text-color: ${CONFIG.THEME_COLORS.light.textColor};
    --primary-color: ${CONFIG.THEME_COLORS.light.primaryColor};
    --secondary-color: ${CONFIG.THEME_COLORS.light.secondaryColor};
    --border-color: ${CONFIG.THEME_COLORS.light.borderColor};
    --header-bg: ${CONFIG.THEME_COLORS.light.headerBg};
    --card-bg: ${CONFIG.THEME_COLORS.light.cardBg};
    --card-border: ${CONFIG.THEME_COLORS.light.cardBorder};
    --nav-text: ${CONFIG.THEME_COLORS.light.navText};
    --nav-hover: ${CONFIG.THEME_COLORS.light.navHover};
    --footer-bg: ${CONFIG.THEME_COLORS.light.footerBg};
    --progress-bg: ${CONFIG.THEME_COLORS.light.progressBg};
    --progress-fill: ${CONFIG.THEME_COLORS.light.progressFill};
    --good-color: ${CONFIG.THEME_COLORS.light.goodColor};
    --medium-color: ${CONFIG.THEME_COLORS.light.mediumColor};
    --poor-color: ${CONFIG.THEME_COLORS.light.poorColor};
  }

  .dark-mode {
    --bg-color: ${CONFIG.THEME_COLORS.dark.bgColor};
    --text-color: ${CONFIG.THEME_COLORS.dark.textColor};
    --primary-color: ${CONFIG.THEME_COLORS.dark.primaryColor};
    --secondary-color: ${CONFIG.THEME_COLORS.dark.secondaryColor};
    --border-color: ${CONFIG.THEME_COLORS.dark.borderColor};
    --header-bg: ${CONFIG.THEME_COLORS.dark.headerBg};
    --card-bg: ${CONFIG.THEME_COLORS.dark.cardBg};
    --card-border: ${CONFIG.THEME_COLORS.dark.cardBorder};
    --nav-text: ${CONFIG.THEME_COLORS.dark.navText};
    --nav-hover: ${CONFIG.THEME_COLORS.dark.navHover};
    --footer-bg: ${CONFIG.THEME_COLORS.dark.footerBg};
    --progress-bg: ${CONFIG.THEME_COLORS.dark.progressBg};
    --progress-fill: ${CONFIG.THEME_COLORS.dark.progressFill};
    --good-color: ${CONFIG.THEME_COLORS.dark.goodColor};
    --medium-color: ${CONFIG.THEME_COLORS.dark.mediumColor};
    --poor-color: ${CONFIG.THEME_COLORS.dark.poorColor};
  }

  #theme-parent-report {
    a {
      color: var(--primary-color);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    /* 卡片样式 */
    .report-card {
      background-color: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 0.5rem;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .report-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .report-header {
      padding: 0.75rem 1rem;
      background-color: var(--primary-color);
      color: white;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .report-content {
      padding: 1rem;
    }

    .report-title {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    .report-description {
      color: var(--nav-text);
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }

    .report-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--nav-text);
      margin-bottom: 0.75rem;
    }

    .report-date {
      display: flex;
      align-items: center;
    }

    .report-date svg {
      margin-right: 0.25rem;
    }

    .report-teacher {
      display: flex;
      align-items: center;
    }

    .report-teacher svg {
      margin-right: 0.25rem;
    }

    /* 进度条样式 */
    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.25rem;
      font-size: 0.75rem;
    }

    .progress-bar {
      height: 0.5rem;
      background-color: var(--progress-bg);
      border-radius: 1rem;
      overflow: hidden;
      margin-bottom: 0.75rem;
    }

    .progress-fill {
      height: 100%;
      background-color: var(--progress-fill);
      border-radius: 1rem;
    }

    .progress-good {
      background-color: var(--good-color);
    }

    .progress-medium {
      background-color: var(--medium-color);
    }

    .progress-poor {
      background-color: var(--poor-color);
    }

    /* 评价标签 */
    .evaluation {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
      flex-wrap: wrap;
    }

    .evaluation-tag {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      border-radius: 1rem;
      background-color: var(--secondary-color);
    }

    .evaluation-good {
      background-color: rgba(16, 185, 129, 0.1);
      color: var(--good-color);
    }

    .evaluation-medium {
      background-color: rgba(245, 158, 11, 0.1);
      color: var(--medium-color);
    }

    .evaluation-poor {
      background-color: rgba(239, 68, 68, 0.1);
      color: var(--poor-color);
    }

    /* 底部导航 */
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--header-bg);
      border-top: 1px solid var(--border-color);
      display: flex;
      justify-content: space-around;
      padding: 0.75rem 0;
      z-index: 100;
    }

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--nav-text);
      font-size: 0.75rem;
    }

    .nav-item.active {
      color: var(--primary-color);
    }

    .nav-icon {
      margin-bottom: 0.25rem;
    }

    /* 为底部导航腾出空间 */
    main {
      padding-bottom: 4rem;
    }

    /* 分类标签 */
    .categories {
      margin: 1.5rem 0;
    }

    .categories-title {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      font-weight: 700;
    }

    .category-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .category-tag {
      background-color: var(--secondary-color);
      color: var(--text-color);
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.875rem;
      transition: background-color 0.2s;
    }

    .category-tag:hover {
      background-color: var(--primary-color);
      color: white;
      text-decoration: none;
    }
  }
`