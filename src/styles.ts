import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  primary: '#E66767',
  secundary: '#FFEBD9',
  background: '#FFF8F2',
}

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
}

body {
    background-color: ${cores.background};
}
`

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`
