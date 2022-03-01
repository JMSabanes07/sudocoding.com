import { ThemeProvider } from 'styled-components'
import { GlobalCss } from 'components/theme/global.styles'
import { theme } from 'components/theme'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuContext } from 'context/movileMenu'
function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || EmptyComponent
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <MenuContext>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '100vw' }}
              style={{ display: 'flex' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </MenuContext>
    </ThemeProvider>
  )
}

const EmptyComponent = ({ children }) => <>{children}</>

export default MyApp
