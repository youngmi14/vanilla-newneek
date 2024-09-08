import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const newnewCup = style({
  marginBottom: '1rem',
  paddingBottom: '1rem',
  borderBottom: `1px solid ${root.color.grayscale.gray_100}`
})

export const newcupFlex = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  padding: '.75rem 0',
})

export const title = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const strong = style({
  fontSize: '1.25rem',
  lineHeight: 1.4,
  fontWeight: 700
})

export const seemore = style({
  display: 'flex',
  alignItems: 'center',
  color: root.color.grayscale.gray_500,
  fontWeight: 700,
})

export const cupSection = style({
  position: 'relative',
  overflow: 'hidden'
})

export const cupScroll = style({
  overflowX: 'auto',
  scrollbarWidth: 'none',
  whiteSpace: 'nowrap',
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
})

export const cupWrap = style({
  display: 'flex',
  gap: '1rem'
})

