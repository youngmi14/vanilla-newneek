import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const nav = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
})

export const co = style({
  color: '#575b5c',
  fontSize: '0.75rem',
  lineHeight: 1.5,
  fontWeight: 'bolder',
})

export const ul = style({
  display: 'flex',
  gap: '0.125rem',
  fontSize: '0.75rem',
  lineHeight: 1.5,
  color: root.color.grayscale.gray_500,
  flexWrap: 'wrap'
})

export const li = style({
  '::after': {
    content: '•',
    fontSize: '0.625rem',
    lineHeight: 1.6,
    padding: '0 0.25rem'
  }
})

export const lastLi = style({
  '::after': {
    content: '',
  }
});