const _size = {
  laptop: '1024px',
  tablet: '768px',
  mobile: '320px',
};

/**
 * Theme configuration object for styled components which includes spacing, colors, and screen sizes.
 */
export const THEME = {
  size: _size,
  layout: {
    laptop: {
      x: '48px',
      y: '16px',
    },
    tablet: {
      x: '48px',
      y: '16px',
    },
    mobile: {
      x: '48px',
      y: '16px',
    },
  },
  min: (device) => `@media screen and (min-width: ${_size[device]})`,
  max: (device) => `@media screen and (max-width: ${_size[device]})`,

  cursor: {
    idle: {
      size: '30px',
      opacity: 0.4,
    },
    hover: {
      size: '9px',
      opacity: 1,
    },
    hidden: {
      size: '0px',
      opacity: 0,
    },
  },

  spacing: {
    ne: '0px', // none
    hr: '1px', // hairline
    pe: '2px', // petite // consumed
    xs: '4px', // extra-small  //consumed
    sm: '8px', // small // consumed
    df: '16px', // default
    lg: '32px', // large //consumed
    xl: '48px', // extra-large // consumed
    hg: '64px', // huge // consumed
  },
  fontHeight: {
    sm: '110%', // consumed
    md: '130%', // consumed
    lg: '150%',
    xl: '200%', // consumed
  },
  fontSize: {
    xs: '12px', // consumed
    sm: '14px',
    df: '16px',
    lg: '20px', // consumed
    xl: '36px',
    gh: '56px', // consumed
  },
  iconSize: {
    df: '18px',
    lg: '24px',
  },
  fontWeight: {
    df: 400,
    md: 500, // consumed
  },
  borderHeight: {
    df: '1px', // consumed
    lg: '1.5px', // consumed
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    blue: '#0000ff',
    yellow: '#FCDF00',
    green: '#0efb0e',
    gray: {
      400: '#9ca3af', //consumed
      500: '#6b7280', // consumed
    },
  },
};
