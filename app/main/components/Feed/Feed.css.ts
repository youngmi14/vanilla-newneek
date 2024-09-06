import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const feed = style({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 0%',
  width: '100%',
  maxWidth: 648,
  marginLeft: 'auto',
  marginRight: 'auto',
  borderLeftWidth: 1,
  borderRightWidth: 1,
  paddingLeft: '2.25rem',
  paddingRight: '2.25rem',
  borderLeftColor: '#eee',
  borderRightColor: '#eee',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid'
})

export const header = style({
  position: 'sticky',
  top: '4rem',
  zIndex: 10,
  marginBottom: '1.5rem',
  marginLeft: '-2.25rem',
  marginRight: '-2.25rem',
  paddingTop: '0.75rem',
  backgroundColor: root.color.base.white,
});

export const relativeDiv = style({
  position: 'relative',
  overflow: 'hidden',
});

export const borderDiv = style({
  borderBottomWidth: 1,
  borderColor: root.color.grayscale.gray_200,
  borderStyle: 'solid'
});

export const buttonWrap = style({
  display: 'flex',
  gap: '1rem',
  marginBottom: -1,
  width: '100%',
  padding: '0 2.25rem 0.125rem'
})

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.5rem',
  marginBottom: '-0.125rem',
  padding: '0.5rem 0.75rem',
  color: root.color.grayscale.gray_500,
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.5,
  whiteSpace: 'nowrap',
  borderColor: 'transparent',
  borderBottomWidth: 2,
  cursor: 'pointer',
})

export const articleWrap = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.75rem '
})

export const bottomMargin = style({
  height: '2.5rem',
  width: '100 %'
})