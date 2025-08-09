import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData, getPostBlocks } from '@/lib/db/getSiteData'
import { generateRobotsTxt } from '@/lib/robots.txt'
import { generateRss } from '@/lib/rss'
import { generateSitemapXml } from '@/lib/sitemap.xml'
import { DynamicLayout } from '@/themes/theme'
import { generateRedirectJson } from '@/lib/redirect'
import { checkDataFromAlgolia } from '@/lib/plugins/algolia'
import React from "react";
import styled from "styled-components";

/**
 * 首页布局
 * @param {*} props
 * @returns
 */
const Index = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutIndex' {...props} />
}

/**
 * SSG 获取数据
 * @returns
 */
export async function getStaticProps(req) {
  const { locale } = req
  const from = 'index'
  const props = await getGlobalData({ from, locale })
  const POST_PREVIEW_LINES = siteConfig(
    'POST_PREVIEW_LINES',
    12,
    props?.NOTION_CONFIG
  )
  props.posts = props.allPages?.filter(
    page => page.type === 'Post' && page.status === 'Published'
  )

  // 处理分页
  if (siteConfig('POST_LIST_STYLE') === 'scroll') {
    // 滚动列表默认给前端返回所有数据
  } else if (siteConfig('POST_LIST_STYLE') === 'page') {
    props.posts = props.posts?.slice(
      0,
      siteConfig('POSTS_PER_PAGE', 12, props?.NOTION_CONFIG)
    )
  }

  // 预览文章内容
  if (siteConfig('POST_LIST_PREVIEW', false, props?.NOTION_CONFIG)) {
    for (const i in props.posts) {
      const post = props.posts[i]
      if (post.password && post.password !== '') {
        continue
      }
      post.blockMap = await getPostBlocks(post.id, 'slug', POST_PREVIEW_LINES)
    }
  }

  // 生成robotTxt
  generateRobotsTxt(props)
  // 生成Feed订阅
  generateRss(props)
  // 生成
  generateSitemapXml(props)
  // 检查数据是否需要从algolia删除
  checkDataFromAlgolia(props)
  if (siteConfig('UUID_REDIRECT', false, props?.NOTION_CONFIG)) {
    // 生成重定向 JSON
    generateRedirectJson(props)
  }

  // 生成全文索引 - 仅在 yarn build 时执行 && process.env.npm_lifecycle_event === 'build'

  delete props.allPages

  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  }
}

// 删除原有的 export default Index
const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 24px 12px 80px 12px;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
  min-height: 100vh;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #4f46e5;
  margin-bottom: 8px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #6366f1;
  text-align: center;
  margin-bottom: 24px;
`;

const DanceCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(79,70,229,0.08);
  padding: 20px 16px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckInButton = styled.button`
  background: linear-gradient(90deg, #6366f1 0%, #818cf8 100%);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 12px 32px;
  margin-top: 16px;
  box-shadow: 0 2px 8px rgba(99,102,241,0.12);
  cursor: pointer;
  transition: background 0.2s;
  &:active {
    background: #6366f1;
  }
`;

const GrowthTimeline = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TimelineItem = styled.li`
  background: #eef2ff;
  border-radius: 12px;
  margin-bottom: 14px;
  padding: 14px 16px;
  box-shadow: 0 1px 6px rgba(99,102,241,0.07);
  display: flex;
  flex-direction: column;
`;

const DateText = styled.span`
  font-size: 0.95rem;
  color: #6366f1;
  font-weight: 500;
  margin-bottom: 4px;
`;

const DescText = styled.span`
  font-size: 1.05rem;
  color: #374151;
`;

function DanceHome() {
  const timeline = [
    { date: "2024-06-01", desc: "完成第1次街舞打卡，学习基础动作。" },
    { date: "2024-06-03", desc: "第2次打卡，掌握节奏感，参与集体舞。" },
    { date: "2024-06-05", desc: "第3次打卡，尝试个人solo表演。" },
    { date: "2024-06-07", desc: "第4次打卡，学习新舞步并录制成长视频。" },
  ];

  return (
    <Container>
      <Title>少儿街舞打卡</Title>
      <Subtitle>记录每一次成长，见证舞步进阶</Subtitle>
      <DanceCard>
        <img src="/avatar.png" alt="头像" style={{width:72, height:72, borderRadius: "50%", marginBottom:12}} />
        <div style={{fontSize:'1.15rem', fontWeight:600, color:'#6366f1'}}>Mayn</div>
        <div style={{fontSize:'0.95rem', color:'#64748b', marginTop:4}}>累计打卡 <span style={{color:'#4f46e5', fontWeight:700}}>4</span> 次</div>
        <CheckInButton>今日打卡</CheckInButton>
      </DanceCard>
      <h2 style={{fontSize:'1.2rem', color:'#6366f1', marginBottom:10, marginLeft:4}}>成长档案</h2>
      <GrowthTimeline>
        {timeline.map((item, idx) => (
          <TimelineItem key={idx}>
            <DateText>{item.date}</DateText>
            <DescText>{item.desc}</DescText>
          </TimelineItem>
        ))}
      </GrowthTimeline>
    </Container>
  );
}
