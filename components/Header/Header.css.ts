import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  backgroundColor: 'rgb(255 107 0)',
  color: 'white',
  width: '100%',
  height: '4rem',
  paddingLeft: '4rem',
  paddingRight: '4rem',
})

export const navWrap = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
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