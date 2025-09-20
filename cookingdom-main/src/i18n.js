import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'
import ru from './locales/ru.json'
import fil from './locales/fil.json'
import ms from './locales/ms.json'

export const supportedLangs = ['en', 'zh', 'ru', 'fil', 'ms']
export const defaultLang = 'en'

const storedLang = localStorage.getItem('userLanguage')
let browserLang = ''
if (typeof navigator !== 'undefined') {
  browserLang = navigator.language.split('-')[0]
}

let initialLang = defaultLang
if (storedLang && supportedLangs.includes(storedLang)) {
  initialLang = storedLang
} else if (browserLang && supportedLangs.includes(browserLang)) {
  initialLang = browserLang
}

export const i18n = createI18n({
  legacy: false,
  locale: initialLang,
  fallbackLocale: defaultLang,
  messages: { en, zh, ru, fil, ms },
  // 如果需要在模板之外的地方访问 $t (比如 JS 文件)，可以启用 globalInjection
  // globalInjection: true,
})

// 变量已在上方直接导出
