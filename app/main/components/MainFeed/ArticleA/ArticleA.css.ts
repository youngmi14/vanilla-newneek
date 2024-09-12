import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const articleA = style({
  marginBottom: '1rem',
  paddingBottom: '1rem',
  borderBottom: `1px solid ${root.color.grayscale.gray_100}`
})

export const articleWrap = style({
  display: 'flex',
  gap: '.75rem',
  padding: '.75rem 0',
  flexDirection: 'column'
})

export const titleWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const title = style({
  fontSize: '1.25rem',
  lineHeight: 1.4,
  fontWeight: 700,
})

export const seemore = style({
  display: 'flex',
  alignItems: 'center',
  color: root.color.grayscale.gray_500,
  fontWeight: 700,
})