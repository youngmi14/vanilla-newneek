import { createGlobalTheme } from '@vanilla-extract/css';

export const root = createGlobalTheme(':root', {
  color: {
    base: {
      white: '#fff',
      black: '#000',
    },
    primary: {
      orange_900: '#ff6b00',
    },
    grayscale: {
      gray_100: '#eeeeee',
      gray_200: '#e4e5e5',
      gray_500: '#77797b',
      gray_600: '#3c4043',
      gray_900: '#111213',
    },
    svg: {
      unchecked: '#979b9e',
      checked: '',
    }
  },
  font: {
    body: `-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
  'Pretendard Variable', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI',
  'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  sans-serif`
  }
})