import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const post = style({
  border: `1px solid ${root.color.grayscale.gray_200}`,
  padding: '1rem',
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  height: '10rem',
  width: 280,
  justifyContent: 'space-between'
})

export const title = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  gap: '0.5rem',
})

export const authorWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  flex: '1 1 0%'
})

export const author = style({
  display: 'flex',
  alignItems: 'center'
})

export const name = style({
  display: 'flex',
  alignItems: 'center',
  color: root.color.grayscale.gray_600,
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: 1.285,
  maxWidth: 130,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'break-word'
})

export const time = style({
  color: root.color.grayscale.gray_500,
  fontSize: '0.75rem',
})

export const content = style({
  color: root.color.grayscale.gray_900,
  fontSize: '0.874rem',
  lineHeight: 1.285,
  overflowWrap: 'break-word',
  whiteSpace: 'normal',
  overflow: 'hidden',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  marginBottom: 14,
})

export const interaction = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '0.75rem',
})