import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const popularGroundPost = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem',
})

export const titleWrap = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const title = style({
    fontSize: '1.25rem',
    lineHeight: 1.4,
    color: root.color.grayscale.gray_900,
    fontWeight: 700,
})

export const postWrap = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    gap: '.75rem',
})