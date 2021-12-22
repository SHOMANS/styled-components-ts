import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    backgroundColors: {
      primary: string
      secondary: string
      white: string
      black: string
    },

    colors: {
      primary: string
      secondary: string
      white: string
      black: string
      error: string,
      success: string,
    };
  }
}