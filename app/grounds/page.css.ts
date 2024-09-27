import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const main = style({
  display: 'flex',
  paddingTop: '4rem',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
  flexDirection: 'row'
})