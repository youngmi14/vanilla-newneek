import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const pizza = style({
  border: `1px solid ${root.color.grayscale.gray_200}`,
  display: 'flex',
  padding: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '.5rem',
  flexDirection: 'column'
});

export const pizzaStaton = style({
  marginBottom: '1rem',
  display: 'block',
  verticalAlign: 'middle',
  color: 'transparent'
});

export const title = style({
  color: root.color.grayscale.gray_900,
  fontWeight: 700,
  textAlign: 'center',
  padding: '0 .5rem',
  marginBottom: '.625rem'
})

export const period = style({
  color: root.color.grayscale.gray_600,
  fontSize: '.75rem',
  lineHeight: 1.5,
  marginBottom: '.625rem',
})