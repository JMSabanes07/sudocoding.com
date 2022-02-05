import { ThemeProvider } from 'styled-components'
import { GlobalCss } from 'components/theme/global.styles'
import { theme } from 'components/theme'
import { motion, AnimatePresence } from 'framer-motion'
function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || EmptyComponent
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            style={{ display: 'flex' }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}

const EmptyComponent = ({ children }) => <>{children}</>

export default MyApp
