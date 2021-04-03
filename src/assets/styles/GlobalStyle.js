import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
    html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
  
  a, button {
    font-family: sans-serif;
  }
 
}` //tutaj reset
