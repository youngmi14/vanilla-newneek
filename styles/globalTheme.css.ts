import { createGlobalTheme } from '@vanilla-extract/css';

export const root = createGlobalTheme(':root', {
  color: {
    base: {
      white: '#fff',
      black: '#000',
    },
    primary: {
      orange_900: '#ff6b00',
      orange_500: '#fc937c',
    },
    grayscale: {
      gray_010: '#f5f5f5',
      gray_100: '#eeeeee',
      gray_200: '#e4e5e5',
      gray_300: '#ced0d1',
      gray_400: '#979b9e',
      gray_500: '#77797b',
      gray_600: '#575b5c',
      gray_700: '#4a4944',
      gray_800: '#3c4043',
      gray_900: '#111213',
    },
    system: {
      purple_900: '#9c26f9',
      purple_500: '#d583fd',
      green_900: '#0eb766',
      green_500: '#69de8e',
    }
  },
  font: {
    body: `-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
  'Pretendard Variable', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI',
  'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  sans-serif`
  }
})