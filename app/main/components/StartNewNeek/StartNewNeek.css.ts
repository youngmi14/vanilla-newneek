import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const startNewNeek = style({
  paddingTop: '1.75rem',
  paddingBottom: '1.75rem',
  scrollbarWidth: 'none',
  overflowY: 'auto',
  width: 216,
  height: 'calc(100vh - 64px)',
  position: 'sticky',
  top: '4rem',
  zIndex: 40,
  '@media': {
    'screen and (max-width: 1200px)': {
      display: 'none'
    }
  }
})

export const startNewNeekWrap = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

export const img = style({
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center',
  width: '3.5rem',
  height: '3.5rem',
  marginBottom: '.5rem'
})

export const text = style({
  color: root.color.base.black,
  textAlign: 'center',
  fontWeight: 700,
  marginBottom: '1rem',
  lineHeight: '1.5'
})

export const startBtn = style({
  height: '2.25rem',
  color: root.color.base.white,
  backgroundColor: root.color.primary.orange_900,
  fontWeight: 700,
  lineHeight: '1.285',
  paddingLeft: '.75rem',
  paddingRight: '.75rem',
  borderRadius: '.5rem',
  whiteSpace: 'nowrap'
})