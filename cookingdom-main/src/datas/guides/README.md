# Guides Data Structure

This directory contains the modular guide data structure for Cookingdom levels.

## Directory Structure

```
guides/
├── en/                 # English guides
│   ├── levels-01-10.js # Levels 1-10
│   ├── levels-11-20.js # Levels 11-20
│   ├── levels-21-30.js # Levels 21-30
│   ├── levels-31-40.js # Levels 31-40
│   ├── levels-41-50.js # Levels 41-50
│   └── levels-51-60.js # Levels 51-60
├── zh/                 # Chinese guides
│   ├── levels-01-10.js
│   ├── levels-11-20.js
│   ├── levels-21-30.js
│   ├── levels-31-40.js
│   ├── levels-41-50.js
│   └── levels-51-60.js
├── ru/                 # Russian guides
│   ├── levels-01-10.js
│   ├── levels-11-20.js
│   ├── levels-21-30.js
│   ├── levels-31-40.js
│   ├── levels-41-50.js
│   └── levels-51-60.js
├── fil/                # Filipino guides
│   ├── levels-01-10.js
│   ├── levels-11-20.js
│   ├── levels-21-30.js
│   ├── levels-31-40.js
│   ├── levels-41-50.js
│   └── levels-51-60.js
└── ms/                 # Malay guides
    ├── levels-01-10.js
    ├── levels-11-20.js
    ├── levels-21-30.js
    ├── levels-31-40.js
    ├── levels-41-50.js
    └── levels-51-60.js
```

## File Naming Convention

- Each file contains exactly 10 levels (except the last range which may have fewer)
- File names follow the pattern: `levels-XX-YY.js` where XX and YY are zero-padded numbers
- Export names follow the pattern: `levelsXXtoYY` (camelCase, no zero-padding)

## Export Structure

Each file should export an array with the following structure:

```javascript
// Example: levels-01-10.js
export const levels01to10 = [
  {
    id: 'cookingdom-game-level-1',
    title: 'Cookingdom Level 1 First Pizza Walkthrough',
    pageTitle: 'Cookingdom Level 1 First Pizza Walkthrough',
    pageSubtitle: 'Master the basics of Cookingdom...',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_01.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-1' } },
    iframeUrl: 'https://www.youtube.com/embed/ItLXkQrpelU',
    seo: {
      title: '...',
      description: '...',
      keywords: '...'
    },
    sidebarData: {
      sidebarImageUrl: '...',
      levelInfoHtml: '...',
      featuredGuides: [...]
    },
    detailsHtml: `...`
  },
  // ... more levels
]
```

## Migration Notes

- The new structure is backward compatible with the old single-file structure
- The `useGuides` composable will try to load from the new modular structure first
- If the new structure fails, it falls back to the legacy files
- This allows for gradual migration of data

## Benefits

1. **Better Performance**: Only load the level ranges that are needed
2. **Easier Maintenance**: Smaller files are easier to edit and manage
3. **Better Git History**: Changes to specific level ranges don't affect other ranges
4. **Scalability**: Easy to add new level ranges as the game grows
5. **Team Collaboration**: Multiple people can work on different level ranges simultaneously

## Data Migration

To migrate data from the old structure:

1. Copy the relevant level data from the old files (guides.js, guides-zh.js, etc.)
2. Paste them into the appropriate new files based on level number
3. Update the export name to match the new convention
4. Test that the data loads correctly
5. Once all data is migrated, the old files can be removed
