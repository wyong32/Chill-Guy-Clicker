/**
 * Dynamic page metadata update utility functions
 * Reference cookingdom's SEO optimization strategies
 */

/**
 * Update or create meta tags
 * @param {string} nameOrProperty - name or property attribute value of meta tag
 * @param {string} content - content attribute value of meta tag
 */
export const updateMetaTag = (nameOrProperty, content) => {
  if (typeof document === 'undefined') return

  let tag = document.querySelector(`meta[name="${nameOrProperty}"]`)
  if (!tag) {
    tag = document.querySelector(`meta[property="${nameOrProperty}"]`)
  }

  if (!tag && content) {
    tag = document.createElement('meta')
    if (nameOrProperty.startsWith('og:') || nameOrProperty.startsWith('fb:') || nameOrProperty.startsWith('twitter:')) {
      tag.setAttribute('property', nameOrProperty)
    } else {
      tag.setAttribute('name', nameOrProperty)
    }
    document.head.appendChild(tag)
  }

  if (tag) {
    if (content) {
      tag.setAttribute('content', content)
    } else {
      // Optional: remove tag if content is empty
      // tag.remove()
    }
  }
}

/**
 * Update or create canonical link tag
 * @param {string} url - canonical URL
 */
export const updateCanonicalTag = (url) => {
  if (typeof document === 'undefined') return

  let linkTag = document.querySelector('link[rel="canonical"]')
  if (!linkTag) {
    linkTag = document.createElement('link')
    linkTag.setAttribute('rel', 'canonical')
    document.head.appendChild(linkTag)
  }
  linkTag.setAttribute('href', url)
}

/**
 * Update page title and basic SEO information
 * @param {Object} options - SEO configuration options
 */
export const updatePageSEO = (options = {}) => {
  const {
    title = 'Chill Guy Clicker',
    description = 'Best Chill Guy clicker game experience',
    keywords = 'chill guy, clicker game, casual game, web game',
    image = '/images/logo.png',
    url = window.location.href,
    type = 'website'
  } = options

  // Update page title
  document.title = title

  // Update basic meta tags
  updateMetaTag('description', description)
  updateMetaTag('keywords', keywords)

  // Update Open Graph tags
  updateMetaTag('og:title', title)
  updateMetaTag('og:description', description)
  updateMetaTag('og:image', image)
  updateMetaTag('og:url', url)
  updateMetaTag('og:type', type)
  updateMetaTag('og:site_name', 'Chill Guy Clicker')

  // Update Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image')
  updateMetaTag('twitter:title', title)
  updateMetaTag('twitter:description', description)
  updateMetaTag('twitter:image', image)

  // Update canonical URL
  updateCanonicalTag(url)
}

/**
 * Update specific SEO information for game pages
 * @param {Object} game - game object
 */
export const updateGameSEO = (game) => {
  if (!game) return

  const gameTitle = `${game.title} - Chill Guy Clicker`
  const gameDescription = game.description || `Experience the exciting ${game.title} game content`
  const gameImage = game.imageUrl || '/images/logo.png'

  updatePageSEO({
    title: gameTitle,
    description: gameDescription,
    image: gameImage,
    type: 'article'
  })
}
