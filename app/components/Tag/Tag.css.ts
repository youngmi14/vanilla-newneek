import { style, createVar, styleVariants } from '@vanilla-extract/css';
import { root } from '@/styles/globalTheme.css';

// 변수 생성
const tagBorderColor = createVar();
const tagTextColor = createVar();

const baseTag = style({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: '.875rem',
    lineHeight: 1.285,
    padding: '0 .75rem',
    borderRadius: 9999,
    border: `1px solid ${tagBorderColor}`,
    color: tagTextColor,
    cursor: 'pointer',
    height: '2rem',
})

export const tagVariants = styleVariants({
    orange: [baseTag, { // 나의 AI
        vars: {
            [tagBorderColor]: root.color.primary.orange_500,
            [tagTextColor]: root.color.primary.orange_900
        }
    }],
    green: [baseTag, { // 나의 지구
        vars: {
            [tagBorderColor]: root.color.system.green_500,
            [tagTextColor]: root.color.system.green_900
        }
    }],
    purple: [baseTag, { // 나의 덕질
        vars: {
            [tagBorderColor]: root.color.system.purple_500,
            [tagTextColor]: root.color.system.purple_900
        }
    }]
    // 태그 추가되면 아래 계속 추가
})
