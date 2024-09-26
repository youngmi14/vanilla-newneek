import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const ground = style({
    padding: '1rem',
    border: `1px solid ${root.color.grayscale.gray_200}`,
    borderRadius: '.5rem',
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'center',
})

export const content = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '.25rem',
    flex: "1 1 0%",
    overflow: 'hidden',
})

export const thumbnail = style({
    borderRadius: '.5rem',
    objectPosition: 'center',
    objectFit: 'cover',
    maxWidth: '100%',
    border: `1px solid ${root.color.grayscale.gray_100}`,
})

export const title = style({
    fontSize: '1.25rem',
    lineHeight: 1.333,
    color: root.color.grayscale.gray_900,
    fontWeight: 700,
    overflow: 'hidden',
    display: 'webkit-box',
    WebkitBoxOrient: 'vertical',
})

export const des = style({
    color: root.color.grayscale.gray_600,
    fontSize: '.875rem',
    lineHeight: 1.285,
    overflow: 'hidden',
    display: 'webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2
})

export const infoWrap = style({
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
})

export const topic = style({
    padding: '.25rem .5rem',
    fontSize: '.75rem',
    lineHeight: 1.5,
    display: 'inline-felx',
    justifyContent: 'center',
    alignItems: 'center',
    background: root.color.grayscale.gray_010,
    color: root.color.grayscale.gray_700,
    borderRadius: 9999,
    height: 26,
})

export const user = style({
    fontSize: '.75rem',
    fontWeight: 700,
    lineHeight: 1.5,
    gap: '.125rem',
    display: 'inline-flex',
    alignItems: 'center',
    color: root.color.grayscale.gray_500,
})