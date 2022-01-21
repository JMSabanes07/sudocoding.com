import { ThemeProvider } from 'styled-components'
import { GlobalCss } from 'components/theme/global.styles'
import { theme } from 'components/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
