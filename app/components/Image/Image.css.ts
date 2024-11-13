import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const authThum = style({
  color: 'transparent',
  objectPosition: 'center',
  objectFit: 'cover',
  backgroundColor: root.color.grayscale.gray_200,
  border: `1px solid ${root.color.grayscale.gray_200}`,
  borderRadius: 9999,
  width: '1.75rem',
  height: '1.75rem',
  maxWidth: '100%'
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