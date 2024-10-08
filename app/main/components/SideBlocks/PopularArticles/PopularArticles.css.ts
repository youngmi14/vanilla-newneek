import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const popularArticles = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const title = style({
  color: root.color.grayscale.gray_500,
  fontWeight: 700
})

export const ul = style({
  gap: 18,
  display: 'flex',
  flexDirection: 'column'
})

export const article = style({
  display: 'flex',
  gap: '0.125rem',
})

export const number = style({
  color: root.color.grayscale.gray_600,
  fontSize: '0.75rem',
  lineHeight: 1.5,
  textAlign: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
  width: '1rem',
  height: '1rem',
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
})

export const articleTitle = style({
  color: root.color.grayscale.gray_900,
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: 1.285,
  overflow: 'hidden',
  WebkitLineClamp: 1,
})

export const infoWrap = style({
  color: root.color.grayscale.gray_500,
  fontSize: '0.75rem',
  lineHeight: 1.5,
  gap: '0.125rem',
  display: 'flex',
  alignItems: 'center'
})
