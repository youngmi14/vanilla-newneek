import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const post = style({
  border: `1px solid ${root.color.grayscale.gray_200}`,
  padding: '1rem',
  borderRadius: '.5rem',
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
  gap: '.5rem',
})

export const authorWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  flex: '1 1 0%'
})

export const img = style({
  objectPosition: 'center',
  objectFit: 'cover',
  color: 'transparent',
  backgroundColor: root.color.grayscale.gray_200,
  border: `1px solid ${root.color.grayscale.gray_200}`,
  borderRadius: 9999,
  width: '1.75rem',
  height: '1.75rem',
  maxWidth: '100%'
})

export const author = style({
  display: 'flex',
  alignItems: 'center',
  gap: 3,
})

export const name = style({
  display: 'flex',
  alignItems: 'center',
  color: root.color.grayscale.gray_700,
  fontWeight: 700,
  fontSize: '.875rem',
  lineHeight: 1.285,
  maxWidth: 130,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'break-word'
})

export const time = style({
  color: root.color.grayscale.gray_500,
  fontSize: '.75rem',
})

export const content = style({
  color: root.color.grayscale.gray_900,
  fontSize: '.874rem',
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
  gap: '.75rem',
})

export const heartWrap = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '.75rem',
  backgroundColor: root.color.grayscale.gray_100,
  border: '1px solid #fff',
  borderRadius: 9999,
  width: '1.25rem',
  height: '1.25rem',
  marginLeft: '.25rem',
})

export const iconWrap = style({
  display: 'inline-flex',
  gap: '.25rem',
  alignItems: 'center',

  color: root.color.grayscale.gray_400,
  fontSize: '.75rem',
  fontWeight: 600,
  lineHeight: 1.5,
  marginLeft: '.25rem',

})

export const iconText = style({

})