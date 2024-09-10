import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const article = style({
  paddingBottom: '1rem',
  borderBottom: `1px solid ${root.color.grayscale.gray_100}`,
  marginBottom: '1rem',
  display: 'block',
});

export const articleWrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem',
  padding: '.5rem 0',
});

export const contentDiv = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

export const thum = style({
  width: 138,
  height: 92,
  aspectRatio: 'auto',
  marginTop: 36,
  overflow: 'hidden',
  position: 'relative',
  order: 2,
});

export const thumImg = style({
  display: 'flex',
  flexDirection: 'row',
  position: 'absolute',
  width: '100%',
  height: '100%',
  inset: 0,
  borderRadius: '.5rem',
  objectFit: 'cover',
  objectPosition: 'center',
  color: 'transparent',
});

export const contentWrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  flex: '1 1 0%',
});

export const contentSummary = style({
  backgroundColor: root.color.grayscale.gray_100,
  fontWeight: 700,
  color: root.color.grayscale.gray_600,
  maxWidth: '14rem',
  width: 'fit-content',
  lineHeight: 1.5,
  fontSize: '.75rem',
  padding: '.25rem 0.5rem',
  borderRadius: '.375rem',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1
});

export const contentTitle = style({
  fontWeight: 700,
  fontSize: '1.25rem',
  lineHeight: 1.4,
  wordWrap: 'break-word',
  color: root.color.grayscale.gray_900
});

export const contentDes = style({
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  color: root.color.grayscale.gray_500,
  wordBreak: 'break-all',
  lineHeight: 1.5,
});

export const metadata = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const metadataDiv = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '.5rem',
});

export const authWrap = style({
  display: 'flex',
  gap: '.5rem',
  alignItems: 'center',
})

export const author = style({
  color: root.color.grayscale.gray_600,
  fontSize: '.875rem',
  lineHeight: 1.285,
  fontWeight: 700,
});

export const info = style({
  fontSize: '.75rem',
  gap: '.125rem',
  alignItems: 'center',
  display: 'flex',
  lineHeight: 1.5,
  color: root.color.grayscale.gray_500,
});

export const dot = style({
  fontSize: '.625rem',
  lineHeight: 1.6,
  textAlign: 'center',
  width: '.5rem'
});

export const stats = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '.75rem'
});

export const stat = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '.25rem',
  color: root.color.grayscale.gray_500,
  fontSize: '.75rem',
});