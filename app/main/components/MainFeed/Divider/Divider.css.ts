import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const divider = style({
  display: 'flex',
  marginBottom: '1rem',
  gap: '.375rem',
  flexDirection: 'column',
  paddingTop: '.75rem'
});

export const title = style({
  color: root.color.grayscale.gray_700,
  fontWeight: 700,
  fontSize: '1.125rem',
  lineHeight: 1.333,
});

export const content = style({
  color: root.color.grayscale.gray_600,
  fontSize: '.875rem',
  lineHeight: 1.285,
});