import React, { useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { theme } from '../theme'

import GlobalStyle from '../styles/global';
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  });

  return (
    <StyledThemeProvider theme={theme}>
      <MaterialThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout fixedAppBar={true}>
          <Component {...pageProps} />
        </Layout>

      </MaterialThemeProvider>
    </StyledThemeProvider>
  )
}
