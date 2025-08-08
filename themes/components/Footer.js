import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'

/**
 * 页脚组件
 * @param {*} props 
 * @returns 
 */
export default function Footer(props) {
  const { locale } = useGlobal()
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = since === currentYear || !since ? currentYear : `${since} - ${currentYear}`

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="copyright">
            © {copyrightDate} {siteConfig('AUTHOR')}
          </div>
          
          <div className="footer-links">
            <SmartLink href="/" className="footer-link">首页</SmartLink>
            <SmartLink href="/category" className="footer-link">分类</SmartLink>
            <SmartLink href="/tag" className="footer-link">标签</SmartLink>
            <SmartLink href="/archive" className="footer-link">归档</SmartLink>
          </div>
          
          {siteConfig('BEI_AN') && (
            <div className="beian">
              <SmartLink href="https://beian.miit.gov.cn/" className="beian-link">
                {siteConfig('BEI_AN')}
              </SmartLink>
            </div>
          )}
          
          <div className="powered-by">
            <span>Powered by</span>
            <SmartLink href="https://github.com/tangly1024/NotionNext" className="powered-link">
              NotionNext
            </SmartLink>
          </div>
        </div>
      </div>
    </footer>
  )
}