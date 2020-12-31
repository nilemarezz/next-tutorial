import '../styles/globals.css'
import Layout from '../src/Layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tutorial Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
