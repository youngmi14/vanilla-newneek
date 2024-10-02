import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const main = style({
  paddingTop: '4rem',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  margin: '0 auto',
  position: 'relative',
  flex: '1 1 0%',
  flexDirection: 'column',
})

export const search = style({
  width: '100%',
  display: 'flex',
  margin: '0 auto',
  maxWidth: 648,
  flex: '1 1 0%',
  flexDirection: 'column',
  padding: '2.5rem 0'
})

export const form = style({
  marginBottom: '2.5rem',
  padding: '0',
})

export const searchWrap = style({
  position: 'relative',
  width: '100%',
})

export const input = style({
  color: root.color.grayscale.gray_900,
  fontSize: '.875rem',
  lineHeight: 1.285,
  padding: '.75rem 3rem .75rem 1rem',
  background: root.color.base.white,
  border: `1px solid ${root.color.grayscale.gray_300}`,
  borderRadius: '.5rem',
  width: '100%',
  height: '3rem',
  display: 'flex',
  outline: '2px solid transparent',
  outlineOffset: 2,
})

export const searchIcon = style({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '14px 1rem',
})

export const recentSearch = style({
  padding: 0,
})

export const recentSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const recentTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const titleText = style({
  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: 1.5,
  color: root.color.grayscale.gray_500,
})

export const wordWrap = style({
  display: 'flex',
  gap: '.5rem',
  flexWrap: 'wrap',
})

export const deletBtn = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '.875rem',
  lineHeight: 1.285,
  padding: '0 .5rem .25rem',
  borderRadius: '.25rem',
  gap: '.25rem',
  height: '2rem',
  color: root.color.grayscale.gray_500,
  cursor: 'pointer',
  transitionDuration: '.15s',
  transitionTimingFunction: 'cubic-bezier(.4,.2,1)',
  transitionProperty: 'color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color',
})