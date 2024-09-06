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
  paddingLeft: '4rem',
  paddingRight: '4rem',
  color: 'white',
  backgroundColor: root.color.primary.orange_900,
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
})

export const navMenu = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem'
})

export const navUser = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem'
})