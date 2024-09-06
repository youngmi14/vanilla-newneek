import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const oneMinuteNews = style({
  padding: '1rem',
  borderRadius: '0.5rem',
  border: `1px solid ${root.color.grayscale.gray_100}`,
  gap: '0.75rem',
  flexDirection: 'column',
  display: 'flex',
})

export const titleWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
})

export const title = style({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: 1.5
})

export const tag = style({
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: 1.285,
  overflowWrap: 'break-word',
  whiteSpace: 'pre-wrap'
})