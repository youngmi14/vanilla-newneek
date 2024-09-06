import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const cup = style({
  border: `1px solid ${root.color.grayscale.gray_200}`,
  borderRadius: '.5rem',
  padding: '1rem',
  gap: '1rem',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: 184,
  height: 204,
})

export const title = style({
  fontWeight: 700,
  fontSize: '.875rem',
  lineHeight: 1.285,
  textAlign: 'center',
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  color: root.color.grayscale.gray_900
})

export const contentWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '2.25rem'
})

export const content = style({
  display: '-webkit-box',
  justifyContent: 'space-between',
  textAlign: 'center',
  lineHeight: 1.5,
  fontSize: '.75rem',
  wordBreak: 'break-all',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  marginTop: '.5rem',
  WebkitLineClamp: 2,
  color: root.color.grayscale.gray_600,

})

export const interaction = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '.75rem'
})