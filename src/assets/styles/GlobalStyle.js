import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
    html {
    box-sizing: border-box;
 
  }
  padding:0;
  margin:0;
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family:'Lato' sans-serif;
    margin: 0;
    padding: 0;
  
  }
  
  a, button {
    font-family:'Lato' sans-serif;
  }
 
}` //tutaj reset
