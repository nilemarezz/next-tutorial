import '../styles/globals.css'
import Layout from '../src/Layout'
import Head from 'next/head'
import IndexContext from '../src/context/IndexContext'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tutorial Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <IndexContext>
          <Component {...pageProps} />
        </IndexContext>
      </Layout>
    </>
  )
}

export default MyApp
