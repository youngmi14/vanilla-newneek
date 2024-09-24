import { style } from '@vanilla-extract/css';

export const sideMenu = style({
  paddingTop: '1.75rem',
  paddingBottom: '1.75rem',
  scrollbarWidth: 'none',
  display: 'flex',
  overflowY: 'auto',
  flexDirection: 'column',
  width: 238,
  height: 'calc(100vh - 64px)',
  zIndex: 40,
  top: '4rem',
  position: 'sticky',
  '@media': {
    'screen and (max-width: 1200px)': {
      display: 'none'
    }
  }
})

export const sideMenuWrap = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',
})
