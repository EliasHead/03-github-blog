import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
  globalCss,
} = createStitches({
  theme: {
    colors: {
      blue: '#3294F8',
      baseTitle: '#E7EDF4',
      baseSubtitle: '#C4D4E3',
      baseText: '#AFC2D4',
      baseSpan: '#7B96B2',
      baseLabel: '#3A536B',
      baseBorder: '#1C2F41',
      basePost: '#112131',
      baseProfile: '#0B1B2B',
      baseBackground: '#071422',
      baseIpunt: '#040F1A',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '24px',
    },
  }
})