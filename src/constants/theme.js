/**
 * Theme configuration object for styled components which includes spacing, colors, and screen sizes.
 */
export const THEME = {
  layout: {
    x: '48px',
    y: '16px',
  },
  spacing: {
    ne: '0px', // none
    hr: '1px', // hairline
    pe: '2px', // petite
    xs: '4px', // extra-small
    sm: '16px', // small
    df: '24px', // default
    lg: '64px', // large
    xl: '96px', // extra-large
    gi: '138px', // giant
  },
  fontHeight: {
    xs: '150%',
    sm: '150%',
    df: '150%',
    lg: '130%',
    xl: '130%',
    gi: '110%',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    df: '16px',
    lg: '24px',
    xl: '36px',
    gh: '72px',
  },
  fontWeight: {
    df: 400,
    md: 500,
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    blue: '#0000ff',
    yellow: '#FCDF00',
    green: '#0efb0e',
    gray: {
      500: '#6b7280',
      700: '#374151',
    },
  },
};
