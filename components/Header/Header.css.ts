import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 50,
  display: 'flex',
  width: '100%',
  height: '4rem',
  paddingLeft: '0rem',
  paddingRight: '0rem',
  color: 'white',
  backgroundColor: root.color.base.white,
  border: `1px solid ${root.color.grayscale.gray_200}`,
  '@media': {
    'screen and (max-width: 1200px)': {
      paddingLeft: '4rem',
      paddingRight: '4rem',
    },
    'screen and (max-width: 768px)': {
      paddingLeft: '0',
      paddingRight: '0',
    },
  }
})

export const navWrap = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  padding: 0,
  '@media': {
    'screen and (max-width: 768px)': {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }
  }
})

export const navMenuLg = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  flexShrink: 0,
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none'
    }
  }
})

export const li = style({
  padding: '0 1rem',
  fontSize: '1rem',
  lineHeight: 1.5,
  color: root.color.grayscale.gray_900,
})

export const liSelected = style({
  padding: '0 1rem',
  fontWeight: 800,
  fontSize: '1rem',
  lineHeight: 1.5,
  color: root.color.primary.orange_900,
})

export const navMenuMd = style({
  display: 'none',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
      gap: '.75rem',
    }
  }
})

export const navUser = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  gap: '1.5rem'
})

export const loginBtn = style({
  color: root.color.primary.orange_900,
  fontWeight: 700,
  fontSize: '.875rem',
  lineHeight: 1.285,
  padding: '6px 10px',
  border: `1px solid ${root.color.grayscale.gray_300}`,
  borderRadius: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 30,
  cursor: 'pointer',
})