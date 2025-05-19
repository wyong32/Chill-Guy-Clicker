/**
 * 网站全局配置
 * 集中管理网站的域名、标题、描述等信息
 */

// 网站域名 - 当前使用临时域名，将来可以替换为正式域名
export const SITE_DOMAIN = 'https://chill-guy-clicker-two.vercel.app'

// 网站名称
export const SITE_NAME = 'Chill Guy Games'

// 默认社交分享图片
export const DEFAULT_SHARE_IMAGE = `${SITE_DOMAIN}/images/social-share.jpg`

// 社交媒体配置
export const SOCIAL_MEDIA = {
  twitter: {
    handle: '@ChillGuyGames',
    cardType: 'summary_large_image'
  }
}
