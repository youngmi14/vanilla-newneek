import { style } from '@vanilla-extract/css';

export const introduce = style({
  borderRadius: '0.5rem',
  overflow: 'hidden'
})

export const img = style({
  objectPosition: 'center',
  objectFit: 'cover',
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
})