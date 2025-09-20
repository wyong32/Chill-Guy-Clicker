import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// Store for loaded blog data
const blogPosts = ref([])
const isLoading = ref(false)
const error = ref(null)

// Store raw data before any processing if needed (similar to useGuides)
const rawBlogPosts = ref([])

export function useBlogPosts() {
  const { locale } = useI18n()

  async function loadBlogPosts(lang) {
    isLoading.value = true
    error.value = null
    try {
      let dataModule
      let postsDataToSet

      if (lang === 'zh') {
        dataModule = await import('@/datas/blog-posts-zh.js')
        postsDataToSet = dataModule.blogPostsZh
      } else if (lang === 'ru') {
        dataModule = await import('@/datas/blog-posts-ru.js')
        postsDataToSet = dataModule.blogPostsRu
      } else if (lang === 'fil') {
        dataModule = await import('@/datas/blog-posts-fil.js')
        postsDataToSet = dataModule.blogPosts
      } else if (lang === 'ms') {
        dataModule = await import('@/datas/blog-posts-ms.js')
        postsDataToSet = dataModule.blogPosts
      } else {
        // Default to English
        dataModule = await import('@/datas/blog-posts.js')
        postsDataToSet = dataModule.blogPosts
      }

      if (postsDataToSet) {
        rawBlogPosts.value = postsDataToSet
        // Perform any mapping or processing if needed, like adding routeObject in useGuides
        // For now, directly assign if no extra processing needed for blog posts list/details
        blogPosts.value = rawBlogPosts.value.map((post) => ({
          ...post,
          // Example: Add any dynamic properties if your blog views need them
          // For instance, if blog posts also need dynamic route objects based on lang:
          // routeObject: getBlogPostLinkProps(post, lang) // You'd need to define this function
        }))
      } else {
        console.error(
          `Failed to access the correct export from blog data module for locale ${lang}. Module content:`,
          dataModule,
        )
        error.value = new Error(
          `Could not find expected export in blog data file for locale ${lang}`,
        )
        blogPosts.value = []
        rawBlogPosts.value = []
      }
    } catch (err) {
      console.error(`Failed to load or process blog posts for locale ${lang}:`, err)
      error.value = err
      blogPosts.value = []
      rawBlogPosts.value = []
    } finally {
      isLoading.value = false
    }
  }

  watch(
    locale,
    (newLocale) => {
      loadBlogPosts(newLocale)
    },
    { immediate: true },
  )

  return {
    blogPosts,
    isLoading,
    error,
  }
}
