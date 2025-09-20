/**
 * Updates or creates a <meta> tag in the document's head.
 * Handles both 'name' and 'property' attributes.
 *
 * @param {string} nameOrProperty The value for the 'name' or 'property' attribute.
 * @param {string} content The value for the 'content' attribute.
 */
export const updateMetaTag = (nameOrProperty, content) => {
  if (typeof document === 'undefined') return;
  let tag = document.querySelector(`meta[name="${nameOrProperty}"]`);
  if (!tag) {
    tag = document.querySelector(`meta[property="${nameOrProperty}"]`);
  }

  if (!tag && content) {
    tag = document.createElement('meta');
    if (nameOrProperty.startsWith('og:') || nameOrProperty.startsWith('fb:')) {
      tag.setAttribute('property', nameOrProperty);
    } else {
      tag.setAttribute('name', nameOrProperty);
    }
    document.head.appendChild(tag);
  }

  if (tag) {
    if (content) {
      tag.setAttribute('content', content);
    } else {
      // Optional: Remove tag if content is empty
      // tag.remove();
    }
  }
};

/**
 * Updates or creates the canonical link tag in the document's head.
 *
 * @param {string} url The canonical URL.
 */
export const updateCanonicalTag = (url) => {
  if (typeof document === 'undefined') return;
  let linkTag = document.querySelector('link[rel="canonical"]');
  if (!linkTag) {
    linkTag = document.createElement('link');
    linkTag.setAttribute('rel', 'canonical');
    document.head.appendChild(linkTag);
  }
  linkTag.setAttribute('href', url);
}; 