// Guides Index File
// This file provides utilities for working with the modular guide structure

/**
 * Get all available level ranges
 * @returns {Array} Array of level range objects
 */
export function getLevelRanges() {
  return [
    { range: '01-10', exportName: 'levels01to10', start: 1, end: 10 },
    { range: '11-20', exportName: 'levels11to20', start: 11, end: 20 },
    { range: '21-30', exportName: 'levels21to30', start: 21, end: 30 },
    { range: '31-40', exportName: 'levels31to40', start: 31, end: 40 },
    { range: '41-50', exportName: 'levels41to50', start: 41, end: 50 },
    { range: '51-60', exportName: 'levels51to60', start: 51, end: 60 },
    { range: '61-70', exportName: 'levels61to70', start: 61, end: 70 },
    { range: '71-80', exportName: 'levels71to80', start: 71, end: 80 },
    { range: '81-90', exportName: 'levels81to90', start: 81, end: 90 },
    { range: '91-100', exportName: 'levels91to100', start: 91, end: 100 },
  ]
}

/**
 * Get the level range for a specific level number
 * @param {number} levelNumber - The level number (1-60)
 * @returns {Object|null} The level range object or null if not found
 */
export function getLevelRangeForLevel(levelNumber) {
  const ranges = getLevelRanges()
  return ranges.find(range => levelNumber >= range.start && levelNumber <= range.end) || null
}

/**
 * Get all supported languages
 * @returns {Array} Array of language codes
 */
export function getSupportedLanguages() {
  return ['en', 'zh', 'ru', 'fil', 'ms']
}

/**
 * Load a specific level range for a language
 * @param {string} lang - Language code
 * @param {string} range - Level range (e.g., '01-10')
 * @returns {Promise<Array>} Promise that resolves to the level data array
 */
export async function loadLevelRange(lang, range) {
  const rangeInfo = getLevelRanges().find(r => r.range === range)
  if (!rangeInfo) {
    throw new Error(`Invalid level range: ${range}`)
  }

  try {
    const module = await import(`@/datas/guides/${lang}/levels-${range}.js`)
    return module[rangeInfo.exportName] || []
  } catch (error) {
    console.warn(`Failed to load levels-${range}.js for ${lang}:`, error)
    return []
  }
}

/**
 * Load all guides for a specific language
 * @param {string} lang - Language code
 * @returns {Promise<Array>} Promise that resolves to all guide data
 */
export async function loadAllGuides(lang) {
  const ranges = getLevelRanges()
  const allGuides = []

  for (const range of ranges) {
    try {
      const levelData = await loadLevelRange(lang, range.range)
      allGuides.push(...levelData)
    } catch (error) {
      console.warn(`Failed to load range ${range.range} for ${lang}:`, error)
    }
  }

  return allGuides
}

/**
 * Validate guide data structure
 * @param {Object} guide - Guide object to validate
 * @returns {boolean} True if valid, false otherwise
 */
export function validateGuideStructure(guide) {
  const requiredFields = ['id', 'title', 'category', 'imageUrl']
  return requiredFields.every(field => guide && guide[field])
}

/**
 * Get file path for a specific level range and language
 * @param {string} lang - Language code
 * @param {string} range - Level range
 * @returns {string} File path
 */
export function getFilePath(lang, range) {
  return `src/datas/guides/${lang}/levels-${range}.js`
}
