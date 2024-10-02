import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const searchWord = style({
  border: `1px solid ${root.color.grayscale.gray_200}`,
  borderRadius: 9999,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: root.color.grayscale.gray_400,
  lineHeight: 1.285,
  fontSize: '.875rem',
  padding: '0 .75rem',
  gap: '.25rem',
  height: '2rem',
  cursor: 'pointer'
})