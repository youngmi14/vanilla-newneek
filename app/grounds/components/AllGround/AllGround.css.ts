import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const allGround = style({
    display: 'flex',
    gap: '1rem',
    flexDirection: 'column',
})

export const title = style({
    fontSize: '1.25rem',
    lineHeight: 1.4,
    color: root.color.grayscale.gray_900,
    fontWeight: 700,
    marginBottom: '.375rem',
})

export const des = style({
    fontSize: '1rem',
    lineHeight: 1.5,
    color: root.color.grayscale.gray_600
})

export const groundList = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem',
})