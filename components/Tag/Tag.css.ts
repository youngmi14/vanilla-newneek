import { style } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

export const tag = style({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: '.875rem',
    lineHeight: 1.285,
    padding: '0 .75rem',
    borderRadius: 9999,
    border: `1px solid ${root.color.primary.orange_500}`,
    color: root.color.primary.orange_900,
    cursor: 'pointer',
    height: '2rem',
})