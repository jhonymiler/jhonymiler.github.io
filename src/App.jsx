import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

import Header from '@components/header/Header'
import ScrollToTop from '@components/ui/scroll-to-top'
import '@assets/css/bootstrap.min.css'
import '@assets/scss/style.scss'
import Client from './external/client'
import Footer from './components/footer'
import Apresentacao from './components/apresentacao'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="main-page-wrapper">
        <Apresentacao />
        <ScrollToTop />
      </main>
      <Footer />
      <Client />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App
