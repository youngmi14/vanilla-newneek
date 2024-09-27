import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const mainFeed = style({
    padding: '0 2.25rem',
    maxWidth: 648,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: `1px solid ${root.color.grayscale.gray_100}`,
    borderRight: `1px solid ${root.color.grayscale.gray_100}`,
    '@media': {
        'screen and (max-width: 767px)': {
            borderLeft: 0,
            borderRight: 0,
        }
    }
})

export const mainFeedWrap = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    padding: '1.75rem 0',
})