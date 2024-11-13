import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const viewMore = style({
  display: 'flex',
  alignItems: 'center',
  color: root.color.grayscale.gray_500,
  fontWeight: 700
})