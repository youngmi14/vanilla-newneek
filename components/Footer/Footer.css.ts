import { style } from '@vanilla-extract/css';

export const footer = style({
  paddingTop: '3rem',
  paddingBottom: '4rem',
  backgroundColor: 'rgb(238 238 238)',
})

export const footerWrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
  maxWidth: '1200px',
  marginLeft: 'auto',
  marginRight: 'auto'
})