import '../styles/globals.css'
import SSRProvider from 'react-bootstrap/SSRProvider';
import Layout from "components/shared/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default MyApp
