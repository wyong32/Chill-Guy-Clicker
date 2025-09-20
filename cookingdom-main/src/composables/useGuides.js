import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { defaultLang } from '@/i18n'

// 创建一个 ref 来存储当前加载的指南数据
const guides = ref([])
const isLoading = ref(false)
const error = ref(null)

// Store loaded data before adding routeObject
const rawGuides = ref([])

// Define getGuideLinkProps logic inside the composable
function getGuideLinkProps(level, currentLocale) {
  const isDefaultLang = currentLocale === defaultLang
  let routeName = isDefaultLang ? 'guide-detail' : 'guide-detail-lang'
  let routeParams

  if (isDefaultLang) {
    routeParams = { id: level.id }
  } else {
    if (currentLocale && typeof currentLocale === 'string') {
      routeParams = { id: level.id, lang: currentLocale }
    } else {
      routeName = 'guide-detail'
      routeParams = { id: level.id }
    }
  }
  return { name: routeName, params: routeParams }
}

// Helper function to load guides from new modular structure
async function loadGuidesFromModules(lang) {
  const allGuides = []

  // Define the level ranges and their corresponding file names
  const levelRanges = [
    { range: '01-10', exportName: 'levels01to10' },
    { range: '11-20', exportName: 'levels11to20' },
    { range: '21-30', exportName: 'levels21to30' },
    { range: '31-40', exportName: 'levels31to40' },
    { range: '41-50', exportName: 'levels41to50' },
    { range: '51-60', exportName: 'levels51to60' },
    { range: '61-70', exportName: 'levels61to70' },
    { range: '71-80', exportName: 'levels71to80' },
    { range: '81-90', exportName: 'levels81to90' },
    { range: '91-100', exportName: 'levels91to100' },
  ]

  let loadedCount = 0

  // Load each level range module
  for (const { range, exportName } of levelRanges) {
    try {
      const module = await import(`@/datas/guides/${lang}/levels-${range}.js`)
      const levelData = module[exportName]

      if (levelData && Array.isArray(levelData)) {
        allGuides.push(...levelData)
        loadedCount++
      }
    } catch (err) {
      console.warn(`Failed to load levels-${range}.js for ${lang}:`, err)
      // Continue loading other ranges even if one fails
    }
  }

  // If no modules were loaded successfully, throw an error
  if (loadedCount === 0) {
    throw new Error(`Failed to load any guide modules for language: ${lang}`)
  }

  return allGuides
}

export function useGuides() {
  const { locale } = useI18n()

  async function load(lang) {
    if (isLoading.value) return // 防止重复加载
    isLoading.value = true
    error.value = null

    try {
      let guidesDataToSet

      // Load from modular structure
      try {
        guidesDataToSet = await loadGuidesFromModules(lang)
      } catch (modularError) {
        console.error(`Failed to load guides for ${lang}:`, modularError)
        guidesDataToSet = []
      }

      if (guidesDataToSet && guidesDataToSet.length > 0) {
        rawGuides.value = guidesDataToSet
        guides.value = rawGuides.value.map((guide) => ({
          ...guide,
          routeObject: getGuideLinkProps(guide, lang),
        }))
      } else {
        error.value = new Error(`Could not find guides data for locale ${lang}`)
        guides.value = []
        rawGuides.value = []
      }
    } catch (err) {
      error.value = err
      guides.value = [] // Ensure guides is empty on error
      rawGuides.value = []
    } finally {
      isLoading.value = false
    }
  }

  // 监听 locale 变化，并在变化时重新加载数据
  watch(locale, (newLocale) => {
    // 语言切换时重新加载数据（如果已经有数据的话）
    if (guides.value.length > 0 || isLoading.value) {
      load(newLocale)
    }
  })

  // 返回响应式数据和状态
  return {
    guides,
    isLoading,
    error,
    load, // 导出 load 方法
  }
}
